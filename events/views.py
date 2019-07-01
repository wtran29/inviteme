from django.shortcuts import render, HttpResponse
from django.views.generic import ListView

from events.models import Event


def event_list(request):
    context = {
        'events': Event.objects.all(),
    }
    return HttpResponse('This is a placeholder for all events')