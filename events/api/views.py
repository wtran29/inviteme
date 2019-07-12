from rest_framework import generics, permissions

from events.models import Event, Invite
from events.api.serializers import EventSerializer, InviteSerializer
from users.models import User


class EventListView(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticatedOrReadOnly
    # ]

    # def get_queryset(self):
    #     public_events = Event.objects.filter(event_type='public')
    #     private_events = Event.objects.filter(event_type='private')
    #     if private_events and Event.objects.filter(invite__users=self.request.user):
    #         events_by_creator = Event.objects.filter(creator=self.request.user)
    #         invited_events = Event.objects.filter(invite__is_invited=True)
    #         all_events = public_events | events_by_creator | invited_events
    #         return all_events
    #     return public_events


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # permission_classes = [permissions.IsAuthenticated]


class EventCreateView(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (permissions.IsAuthenticated, )


class EventUpdateView(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (permissions.IsAuthenticated, )


class EventDeleteView(generics.DestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (permissions.IsAuthenticated, )


class InviteListView(generics.ListAPIView):
    serializer_class = InviteSerializer
    queryset = Invite.objects.all()