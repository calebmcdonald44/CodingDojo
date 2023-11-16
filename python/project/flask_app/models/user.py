from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

class User:
    def __init__(self, data):
        self.id = data['id']
        self.username = data['username']
        self.password_hash = data['password_hash']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_register(data):
        is_valid = True

        users = User.get_all()

        if len(data['username']) > 25 or len(data['username']) < 3:
            flash('Username must be between 3 and 25 characters')
            is_valid = False

        if len(data['password']) < 8:
            flash('Password must be at least 8 characters long')
            is_valid = False

        if not any(char.isdigit() for char in data['password']):
            flash('Password must contain 1 number and 1 uppercase letter')
            is_valid = False

        if not any(char.isupper() for char in data['password']):
            flash("Password must contain at least one uppercase letter")
            is_valid = False

        if data['password'] != data['confirm_password']:
            flash('Passwords did not match')
            is_valid = False

        for user in users:
            if data['username'] == user.username:
                flash('Username is already in use')
                is_valid = False
        
        return is_valid
    
    @staticmethod
    def validate_login(data):
        is_valid = False
        user_check = {
            'username': data['username']
        }
        user = User.get_one(user_check)
        print(f'\n\n{user}\n\n')
        if user:
            if bcrypt.check_password_hash(user['password_hash'], data['password']):
                is_valid = True
        
        return is_valid

    @classmethod
    def get_one(cls, data):
        query = """
                SELECT * FROM users
                WHERE username = %(username)s
            """
        results = connectToMySQL('chess_puzzles').query_db(query, data)
        print(f'\n\n{results[0]}\n\n')
        return results[0]

    @classmethod
    def get_all(cls):
        query = """
                SELECT * FROM users
            """
        results = connectToMySQL('chess_puzzles').query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users
    
    @classmethod
    def create_user(cls, data):
        query = """
                INSERT INTO users (username, password_hash, created_at, updated_at)
                VALUES (%(username)s, %(password_hash)s, NOW(), NOW());
            """
        return connectToMySQL('chess_puzzles').query_db(query, data)
