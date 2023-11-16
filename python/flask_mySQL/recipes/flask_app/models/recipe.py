from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import user

from flask_app import app

from flask import flash

from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)

import re

class Recipe:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_cooked = data['date_cooked']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @staticmethod
    def validate_recipe(data):
        is_valid = True

        if not len(data["description"]) > 0:
            flash("Must provide description", 'recipe')
            is_valid = False

        if not len(data["instructions"]) > 0:
            flash("Must provide instructions", 'recipe')
            is_valid = False

        if not len(data["date_cooked"]) > 0:
            flash("Must provide a date", 'recipe')
            is_valid = False

        if not 'under_30' in data:
            flash("Must specify length of recipe", 'recipe')
            is_valid = False

        return is_valid

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO recipes (name, description, instructions, date_cooked, under_30, user_id, created_at, updated_at)
                VALUES (%(name)s, %(description)s, %(instructions)s, %(date_cooked)s, %(under_30)s, %(user_id)s, NOW(), NOW());
            """
        return connectToMySQL('users_schema2').query_db( query, data )
    
    @classmethod
    def get_one(cls, data):
        query = """
                SELECT *
                FROM recipes
                LEFT JOIN users ON recipes.user_id = users.id
                WHERE recipes.id = %(id)s;
            """
        result = connectToMySQL('users_schema2').query_db(query, data)
        row_from_db = result[0]
        this_recipe = cls(row_from_db)

        user_data = {
            **row_from_db,
            'id': row_from_db['users.id'],
            'created_at': row_from_db['users.created_at'],
            'updated_at': row_from_db['users.updated_at']
        }
        this_user = user.User(user_data)
        this_recipe.user = this_user

        return this_recipe
    
    @classmethod
    def get_all(cls):
        query = """
                SELECT *
                FROM recipes
                LEFT JOIN users ON recipes.user_id = users.id;
            """
        result = connectToMySQL('users_schema2').query_db(query)
        
        recipes = []
        if result:
            for row in result:
                recipe = cls(row)
                user_data = {
                    **row,
                    'id': row['users.id'],
                    'created_at': row['users.created_at'],
                    'updated_at': row['users.updated_at']
                }
                new_user = user.User(user_data)
                recipe.new_user = new_user
                recipes.append(recipe)

        return recipes

    @classmethod
    def delete(cls, data):
        query = """
                DELETE FROM recipes
                WHERE id = %(id)s;
            """
        return connectToMySQL('users_schema2').query_db(query, data)
    
    @classmethod
    def edit(cls, data):
        query = """
                UPDATE recipes
                SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_cooked = %(date_cooked)s, under_30 = %(date_cooked)s, updated_at = NOW()
                WHERE id = %(id)s;
            """
        
        return connectToMySQL('users_schema2').query_db(query, data)