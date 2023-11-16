from flask_app.config.mysqlconnection import connectToMySQL

from flask_app import app

from flask import flash

from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)

import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password_hash = data['password_hash']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @staticmethod
    def validate_register(data):
        is_valid = True

        users = User.get_all()

        if data['first_name'].isalpha() == False or data['last_name'].isalpha() == False:
            flash("Name must only contain letters", 'register')
            is_valid = False
        
        if len(data['first_name']) < 3:
            flash("First name must be at least 2 characters", 'register')
            is_valid = False
        
        if len(data['last_name']) < 3:
            flash("Last name must be at least 2 characters", 'register')
            is_valid = False
        
        if not EMAIL_REGEX.match(data['email']):
            flash("Invalid email address", 'register')
            is_valid = False
        
        if len(data['password']) < 8:
            flash("Password must be at least 8 characters long", 'register')
            is_valid = False
        
        if not any(char.isdigit() for char in data['password']):
            flash("Password must contain at least one number", 'register')
            is_valid = False

        if not any(char.isupper() for char in data['password']):
            flash("Password must contain at least one uppercase letter", 'register')
            is_valid = False

        if data['password'] != data['confirm_password']:
            flash("Passwords did not match", 'register')
            is_valid = False

        for user in users:
            if data['email'] == user.email:
                flash("An account already exists with that email", 'register')
                is_valid = False
        
        return is_valid

    @classmethod
    def get_one(cls, data):
        
        query = """
                SELECT *
                FROM users
                WHERE id = %(id)s;
            """
        return connectToMySQL('users_schema2').query_db( query, data )


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('users_schema2').query_db(query)
        users = []
        for user in results:
            users.append( cls(user) )
        return users
    

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO users (first_name, last_name, email, password_hash, created_at, updated_at)
                VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password_hash)s, NOW(), NOW());
            """
        return connectToMySQL('users_schema2').query_db( query, data )
    
    # @classmethod
    # def find_account(cls, data):


    #     query = "SELECT * FROM email_addresses;"
    #     results = connectToMySQL('email_addresses').query_db(query)
    #     print(email['email'])
    #     for x in results:
    #         print(f'\n{x['email']}\n')
    #         if x['email'] == email['email']:
    #             flash("Invalid email address! (not unique)")
    #             is_valid = False
    #     return is_valid

    
    
    # @classmethod
    # def delete(cls, data):
    #     query = """
    #             DELETE FROM email_addresses
    #             WHERE id = %(id)s
    #         """
    #     return connectToMySQL('email_addresses').query_db( query, data )
    

    
    # @classmethod
    # def get_dojo_ninjas(cls, data):

    #     query = """
    #             SELECT *
    #             FROM dojos
    #             LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id
    #             WHERE dojos.id = %(id)s;
    #         """
    #     result = connectToMySQL('dojos_and_ninjas').query_db(query, data)

    #     dojo = cls(result[0])

    #     dojo.ninjas = []

    #     for row in result:
    #         ninja_data = {
    #             **row,
    #             'id': row['ninjas.id'],
    #             'created_at': row['ninjas.created_at'],
    #             'updated_at': row['ninjas.updated_at'],
    #         }
    #         new_ninja = Ninja(ninja_data)
    #         dojo.ninjas.append(new_ninja)

    #     return dojo




