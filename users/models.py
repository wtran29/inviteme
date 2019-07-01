from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.contrib.gis.db import models
from django.core.mail import send_mail
from django.template.loader import get_template
from django.template import Context
from django.conf import settings
from django.core.exceptions import ValidationError
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

from rest_framework.authtoken.models import Token


class User(AbstractUser):
    username = models.CharField(_('Username'), max_length=150, unique=True)
    first_name = models.CharField(_('First Name'), max_length=150, blank=True)
    last_name = models.CharField(_('Last Name'), max_length=150, blank=True)
    email = models.EmailField(_('Email Address'))
    profile_pic = models.ImageField(_('Profile Pic'), upload_to='events/images/profile_pics/', null=True, blank=True)
    # events = models.ManyToManyField(Event, blank=True)
    # likes = models.ManyToManyField(Like, blank=True)
    # attends = models.ManyToManyField(Attend, blank=True)
    # friends = models.BooleanField(blank=False)


class FriendInvite(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    code = models.CharField(max_length=20)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)

    def send(self):
        subject = u'Invitation to add ' + str(self.sender.first_name) + str(self.sender.last_name) + ' as a friend on InviteMe.'
        link = 'http://%s/friend/accept/%s/' % (settings.SITE_HOST, self.code)
        template = get_template('users/friend_invite.txt')
        context = Context({
            'name': self.name,
            'link': link,
            'sender': self.sender.first_name,
        })
        message = template.render(context)
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [self.email])


class FriendRequest(models.Model):
    sent = models.ForeignKey(User, on_delete=models.CASCADE, related_name='request_sent')
    received = models.ForeignKey(User, on_delete=models.CASCADE, related_name='request_received')
    message = models.TextField(_('Message'), blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    viewed_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Friend Requests'
        unique_together = ('sent', 'received')

    def __str__(self):
        return '%s %s' % (self.sent.first_name, self.sent.last_name)


class Friend(models.Model):
    main_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='main_friend')
    friends_with = models.ForeignKey(User, on_delete=models.CASCADE, related_name='connecting_friend')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Friends'
        unique_together = ('main_user', 'friends_with')

    def __str__(self):
        return '%s %s is friends with %s %s' % (
            self.main_user.first_name, self.main_user.last_name,
            self.friends_with.first_name, self.friends_with.last_name
        )

    def save(self, *args, **kwargs):
        """ Cannot add yourself as friends """
        if self.main_user == self.friends_with:
            raise ValidationError('You can not add yourself!')
        super(Friend, self).save(*args, **kwargs)
