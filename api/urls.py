from django.urls import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name="get_routes"),
    path('notes/', views.getNotes, name="get_notes"),
    path('notes/<int:pk>', views.getNote, name="get_note"),
    path('add/', views.addNote, name="add_note"),
    path('remove/<int:pk>', views.removeNote, name="remove_note"),
    path('remove/', views.removeNotes, name="remove_notes"),
    path('update/<int:pk>', views.updateNote, name="update_note"),
]