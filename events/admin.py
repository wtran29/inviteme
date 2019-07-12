from django.contrib.gis import admin
from rest_framework.authtoken.admin import TokenAdmin

from events.models import Event, EventInvite, Location, Like, Attend, Invite

TokenAdmin.raw_id_fields = ('user',)


admin.site.register(Event)
admin.site.register(EventInvite)
admin.site.register(Location)
admin.site.register(Like)
admin.site.register(Attend)
admin.site.register(Invite)
