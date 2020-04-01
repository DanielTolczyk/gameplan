from .models import Game
from builtins import object


class GameSerializer(object):
    def __init__(self, body):
        self.body = body

    @property
    def all_games(self):
        output = {'games' : []}

        for game in self.body:
            game_details = {
                'id' : game.id,
                'name' : game.name,
                'description' : game.description,
                'player_count' : game.player_count,
                'length' : game.length,
            }
            output['games'].append(game_details)
        return output

    @property
    def game_detail(self):
        return {
            'id' : self.body.id,
            'name' : self.body.name,
            'description' : self.body.description,
            'player_count' : self.body.player_count,
            'length' : self.body.length,
        } 