from rest_framework import serializers
from events.models import Event, Invite, EventInvite, Like, Attend, Location
from users.api.serializers import UserDetailSerializer


class InviteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Invite
        fields = (
            '__all__'

        )


class EventSerializer(serializers.ModelSerializer):
    creator = UserDetailSerializer()
    invited_to = InviteSerializer()

    class Meta:
        model = Event
        fields = (
            'id',
            'creator',
            'name',
            'event_type',
            'date',
            'address',
            'invites',
            'invited_to',
        )