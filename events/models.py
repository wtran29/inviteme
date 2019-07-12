from django.db import models
from django.contrib.gis.db import models
# from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.template.loader import get_template
from django.template import Context
from django.conf import settings
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

from rest_framework.authtoken.models import Token

from events.utils import event_code_generator
from users.models import User, Friend


PRIVATE = 'private'
PUBLIC = 'public'
TYPE_CHOICES = (
    (PRIVATE, 'Private'),
    (PUBLIC, 'Public')
)


class Event(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='event_creator', null=True)
    friends = models.ForeignKey(Friend, on_delete=models.CASCADE, related_name='creator_friends', null=True)
    invited_to = models.ManyToManyField(User, through='Invite', through_fields=('events', 'users'), related_name='invited_to', null=True)
    name = models.CharField(db_index=True, max_length=150)
    event_type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    date = models.DateField(db_index=True, editable=True)
    address = models.CharField(max_length=150)
    invites = models.ManyToManyField(User, through='EventInvite', through_fields=('events', 'sender'), related_name='event_invites')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s created by %s %s' % (self.name, self.creator.first_name, self.creator.last_name)


class Like(models.Model):
    events = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
    users = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    likes = models.BooleanField(default=False)

    def __str__(self):
        return '%s likes this event: %s' % (self.users.username, self.events.name)


class Attend(models.Model):
    events = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
    users = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    attending = models.BooleanField(default=False)

    def __str__(self):
        return '%s is attending %s' % (self.users.first_name, self.events.name)


class Location(models.Model):
    name = models.CharField(db_index=True, max_length=250)
    events = models.ForeignKey(Event, on_delete=models.CASCADE)
    city = models.CharField(db_index=True, max_length=100)
    pin = models.PointField()


class Invite(models.Model):
    events = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
    users = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    is_invited = models.BooleanField(default=False)

    def __str__(self):
        return '%s is invited to %s' % (self.users, self.events)


class EventInvite(models.Model):
    events = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    code = models.CharField(max_length=20, blank=True)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    # inviter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='event_invites')

    def __str__(self):
        return '%s invited %s to %s' % (self.sender.username, self.name, self.events.name)

    def send(self):
        subject = u'Invitation to join ' + str(self.events.name)
        link = 'http://%s/event/accept/%s/' % (settings.SITE_HOST, self.code)
        template = get_template('events/event_invite.txt')
        context = Context({
            'name': self.name,
            'event': self.events.name,
            'link': link,
            'sender': self.sender.first_name,
        })
        message = template.render(context)
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [self.email])
        """ TODO - after email is sent, if user email exists set is_invite to true"""
        if self.email in User.objects.filter(email=self.email):
            new_invite = Invite(
                events=self.events,
                users=User.objects.filter(email=self.email).pk,
                is_invited=True,
            )
            new_invite.save()
        else:
            pass


def pre_save_create_event_code(sender, instance, *args, **kwargs):
    if not instance.code:
        instance.code = event_code_generator(instance)


pre_save.connect(pre_save_create_event_code, sender=EventInvite)


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
