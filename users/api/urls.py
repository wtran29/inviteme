from django.urls import path
from rest_framework.authtoken import views as drf_views

from users.api.views import UserCreateAPIView, UserLoginAPIView, UserLogoutAPIView

app_name = 'user-api'
urlpatterns = [
    path('login/', UserLoginAPIView.as_view()),
    path('register/', UserCreateAPIView.as_view()),
    path('logout/', UserLogoutAPIView.as_view())
]