from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

print("HOWDY")

class User:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comments = data['comments']

    @staticmethod
    def validate_user(user):
        is_valid = True
        print(user)
        if len(user['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if 'location' not in user:
            flash("You must choose a valid location.")
            is_valid = False
        if 'language' not in user:
            flash("You must choose a valid language.")
            is_valid = False
        return is_valid

    @classmethod
    def get_user(cls, data):
        query = """
                SELECT *
                FROM users
                WHERE id = %(id)s;
            """
        
        results = connectToMySQL('dojo_survey').query_db(query, data)
        print(results)
        if results:
            return cls(results[0]) 
        else:
            return ("results undefined")


    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO users (name, location, language, comments, created_at, updated_at)
                VALUES (%(name)s, %(location)s, %(language)s, %(comments)s, NOW(), NOW())
            """
        return connectToMySQL('dojo_survey').query_db(query, data)
    