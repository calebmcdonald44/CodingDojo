from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash

class Puzzle:
    def __init__(self, data):
        self.puzzleid: data['puzzleid']
        self.fen: data['fen']
        # returns list
        self.moves: data["moves"]
        self.rating: data["rating"]
        self.ratingdeviation: data["ratingdeviation"]
        # returns list
        self.themes: data["themes"]

        