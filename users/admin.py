from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from users.models import User, Friend, FriendInvite, FriendRequest


admin.site.register(User, UserAdmin)
admin.site.register(Friend)
admin.site.register(FriendInvite)
admin.site.register(FriendRequest)
