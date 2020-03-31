from django.urls import path
from . import views

urlpatterns = [
    path('games/', views.display_games, name='display_games'),
    path('games/create/', views.new_game, name='new_game'),
    path('game/<int:game_id>/detail/', views.game_detail, name='game_detail'),
    path('game/<int:game_id>/edit/', views.edit_game, name='edit_game'),
    path('game/<int:game_id>/delete/', views.delete_game, name='delete_game'),
]