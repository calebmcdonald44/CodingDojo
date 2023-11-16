from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import book
# topping.on_burgers.append( burger.Burger( burger_data ) )

class Author:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        
        results = connectToMySQL('books_schema').query_db(query)

        authors = []

        for author in results:
            authors.append( cls(author) )
        
        return authors
    
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
                INSERT INTO authors (name, created_at, updated_at)
                VALUE (%(name)s, NOW(), NOW())
            """
        return connectToMySQL('books_schema').query_db( query, data )
    
    # @classmethod
    # def get_author_favorites(cls, data):

    #     query = """
    #             SELECT *
    #             FROM authors
    #             LEFT JOIN favorites ON authors.id = favorites.author_id
    #             LEFT JOIN books ON books.id = favorites.book_id
    #             WHERE authors.id = %(id)s;
    #         """
    #     result = connectToMySQL('books_schema').query_db(query, data)

    #     author.favorites = []

    #     author = cls(result[0])
    #     for row in result:
    #         favorites_data = {
    #             'id': row['books.id'],
    #             'created_at': row['books.created_at'],
    #             'updated_at': row['books.updated_at'],
    #         }
    #         favorite_book = Book(favorites_data)
    #         author.favorites.append(favorite_book)

    #     return author




