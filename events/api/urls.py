from django.urls import path
from rest_framework.authtoken import views as drf_views

from events.api.views import EventList, EventDetail

app_name = 'event-api'
urlpatterns = [
    path('auth/', drf_views.obtain_auth_token, name='auth'),
    path('', EventList.as_view()),
    path('<int:pk>/', EventDetail.as_view()),
]