from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Email:
    def __init__( self , data ):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate(email):
        is_valid = True
        if not EMAIL_REGEX.match(email['email']):
            flash("Invalid email address! (improper formatting)")
            is_valid = False

        query = "SELECT * FROM email_addresses;"
        results = connectToMySQL('email_addresses').query_db(query)
        print(email['email'])
        for x in results:
            print(f'\n{x['email']}\n')
            if x['email'] == email['email']:
                flash("Invalid email address! (not unique)")
                is_valid = False
        return is_valid

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM email_addresses;"
        results = connectToMySQL('email_addresses').query_db(query)
        emails = []
        for email in results:
            # print(f'\n{email}\n')
            emails.append( cls(email) )
        return emails
    
    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO email_addresses (email, created_at, updated_at)
                VALUE (%(email)s, NOW(), NOW())
            """
        return connectToMySQL('email_addresses').query_db( query, data )
    
    @classmethod
    def delete(cls, data):
        query = """
                DELETE FROM email_addresses
                WHERE id = %(id)s
            """
        return connectToMySQL('email_addresses').query_db( query, data )
    
    # @classmethod
    # def get_one(cls, data):
        
    #     query = """
    #             SELECT *
    #             FROM dojos
    #             WHERE id = %(id)s;
    #         """
    #     return connectToMySQL('dojos_and_ninjas').query_db( query, data )

    
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




