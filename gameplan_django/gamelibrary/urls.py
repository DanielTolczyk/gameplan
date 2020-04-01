from django.urls import path
from . import views

urlpatterns = [
    path('', views.game_list, name='game_list'),
    path('new', views.new_game, name='new_game'),
    path('<int:game_id>', views.game_detail, name='game_detail'),
    path('<int:game_id>/edit', views.edit_game, name='edit_game'),
    path('<int:game_id>/delete', views.delete_game, name='delete_game'),
]