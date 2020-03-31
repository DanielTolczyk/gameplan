from django.http import JsonResponse
from .models import Game
from .serializers import GameSerializer
from django.views.decorators.csrf import csrf_exempt
import json

def display_games(request):
    games = Game.objects.all()
    serialized_game = GameSerializer(games).all_games
    return JsonResponse(data=serialized_game, status=200)

def game_detail(request, game_id):
    game = Game.objects.get(id=game_id)
    serialized_game = GameSerializer(game).game
    return JsonResponse(data=serialized_game, status=200)

@csrf_exempt
def new_game(request):
    data = json.loads(request.body)
    if request.method == 'POST':
        game = Game(
            name = data['name'],
            description = data['description'],
            player_count = data['player_count'],
            length = data['length'],
        )
        game.save()

        game_info = {
            'id' : game.id,
            'name' : game.name,
            'description' : game.description,
            'player_count' : game.player_count,
            'length' : game.length,
        }

        return JsonResponse(data=game_info, status=200)

@csrf_exempt
def edit_game(request, game_id):
    data = json.loads(request.body)
    game = Game.objects.get(id=data['id'])
    if request.method == 'POST':
        game.name = data['name']
        game.save()
        game.description = data['description']
        game.save()
        game.player_count = data['player_count']
        game.save()
        game.length = data['length']
        game.save()

        game_info = {
        'id' : game.id,
        'name' : game.name,
        'description' : game.description,
        'player_count' : game.player_count,
        'length' : game.length,
        }

        return JsonResponse(data=game_info, status=200)

@csrf_exempt
def delete_game(request, game_id):
    game = Game.objects.get(id=game_id)
    game.delete()
    return JsonResponse(data={'Message' : 'Game Removed From Collection Successfully'}, status=200) 
