from rest_framework import serializers
from events.models import Event, EventInvite, Like, Attend, Location


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'event_type',
            'date',
            'address',
            'invites',

        )
        model = Event
