from django.http import JsonResponse
from .models import Game
from .serializers import GameSerializer
from .forms import GameForm
from django.views.decorators.csrf import csrf_exempt
import json

def game_list(request):
    games = Game.objects.all()
    serialized_games = GameSerializer(games).all_games
    return JsonResponse(data=serialized_games, status=200)
    

def game_detail(request, game_id):
    game = Game.objects.get(id=game_id)
    serialized_game = GameSerializer(game).game_detail
    return JsonResponse(data=serialized_game, status=200)
    
@csrf_exempt
def new_game(request):
    if request.method == "POST":
        form = GameForm(request.POST)
        if form.is_valid():
            game = form.save(commit=True)
            serialized_game = GameSerializer(game).game_detail
            return JsonResponse(data=serialized_game, status=200)

@csrf_exempt
def edit_game(request, game_id):
    game = Game.objects.get(id=game_id)
    if request.method == "POST":
        form = GameForm(request.POST, instance=game)
        if form.is_valid():
            game = form.save(commit=True)
            serialized_game = GameSerializer(game).game_detail
            return JsonResponse(data=serialized_game, status=200)


@csrf_exempt
def delete_game(request, game_id):
    if request.method == "POST":
        game = Game.objects.get(id=game_id)
        game.delete()
    return JsonResponse(data={'status': 'Successfully deleted game.'}, status=200)