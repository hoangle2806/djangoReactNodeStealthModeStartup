# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def getData(request):
    response_data = {
        "res" : "from django"
    }
    return JsonResponse(response_data)
