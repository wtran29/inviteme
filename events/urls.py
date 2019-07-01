from django.urls import path
from events.views import event_list

app_name = 'events'
urlpatterns = [
    path('', event_list, name='list'),
    path('events/', event_list, name='list'),
]