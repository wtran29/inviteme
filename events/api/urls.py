from django.urls import path
from rest_framework.authtoken import views as drf_views

from events.api.views import (
    EventListView,
    EventDetailView,
    EventCreateView,
    EventUpdateView,
    EventDeleteView,
    InviteListView
)

app_name = 'event-api'
urlpatterns = [
    path('auth/', drf_views.obtain_auth_token, name='auth'),
    path('', EventListView.as_view(), name='list'),
    path('<int:pk>/', EventDetailView.as_view()),
    path('create/', EventCreateView.as_view()),
    path('<int:pk>/update', EventUpdateView.as_view()),
    path('<int:pk>/delete', EventDeleteView.as_view()),
    path('<int:pk>/invited/', InviteListView.as_view()),
]