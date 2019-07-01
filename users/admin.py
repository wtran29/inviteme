from django.contrib import admin

from users.models import User, Friend, FriendInvite, FriendRequest


admin.site.register(User)
admin.site.register(Friend)
admin.site.register(FriendInvite)
admin.site.register(FriendRequest)
