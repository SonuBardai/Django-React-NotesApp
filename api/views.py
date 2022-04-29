from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import NoteSerializer
from .models import Note


@api_view(['GET'])
def getRoutes(request):
    routes = {
        '/': 'Get routes',
        '/notes': 'List all notes',
        '/notes/<int:pk>': 'Get note',
        '/add': 'Add note',
        '/remove/<int:pk>': 'Remove note',
        '/remove': 'Remove all notes',
        '/update/<int:pk>': 'Update note',
    }
    return Response(routes)


@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.filter(id=pk).first()
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def addNote(request):
    serializer = NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def removeNote(request, pk):
    note = Note.objects.filter(id=pk).first()
    if note:
        note.delete()
        return Response("Deleted")
    else:
        return Response("Note not found")


@api_view(['PUT'])
def updateNote(request, pk):
    note = Note.objects.filter(id=pk).first()
    if note:
        serializer = NoteSerializer(instance=note, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response("Updated Note")
    else:
        return Response("Note not found")


@api_view(['DELETE'])
def removeNotes(request):
    Note.objects.all().delete()
    return Response("Deleted all notes")
