from re import M
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def getRoutes(request):
    routes = {
        '/': 'Get routes',
        '/notes': 'List all notes'
    }
    return Response(routes)