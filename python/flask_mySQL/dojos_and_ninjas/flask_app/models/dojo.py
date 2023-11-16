from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninja import Ninja

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        
        results = connectToMySQL('dojos_and_ninjas').query_db(query)

        dojos = []

        for dojo in results:
            dojos.append( cls(dojo) )
        
        return dojos
    
    # @classmethod
    # def get_one(cls, data):
        
    #     query = """
    #             SELECT *
    #             FROM dojos
    #             WHERE id = %(id)s;
    #         """
    #     return connectToMySQL('dojos_and_ninjas').query_db( query, data )

    @classmethod
    def create(cls, data):
        
        query = """
                INSERT INTO dojos (name, created_at, updated_at)
                VALUE (%(name)s, NOW(), NOW())
            """
        return connectToMySQL('dojos_and_ninjas').query_db( query, data )
    
    @classmethod
    def get_dojo_ninjas(cls, data):

        query = """
                SELECT *
                FROM dojos
                LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id
                WHERE dojos.id = %(id)s;
            """
        result = connectToMySQL('dojos_and_ninjas').query_db(query, data)

        dojo = cls(result[0])

        dojo.ninjas = []

        for row in result:
            ninja_data = {
                **row,
                'id': row['ninjas.id'],
                'created_at': row['ninjas.created_at'],
                'updated_at': row['ninjas.updated_at'],
            }
            new_ninja = Ninja(ninja_data)
            dojo.ninjas.append(new_ninja)

        return dojo




