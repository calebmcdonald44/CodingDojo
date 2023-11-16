from flask import render_template, request, redirect, session

from flask_app import app

from flask_app.models.book import Book

@app.route("/new_books")
def new_books():
    print("ROUTE WORKING")
    books = Book.get_all()
    print(books)
    return render_template("all_books.html", books=books)

# @app.route("/create_dojo", methods=["POST"])
# def create_dojo():
#     Dojo.create(request.form)
#     return redirect("/")

# @app.route('/show_dojo/<int:id>')
# def load_one(id):
#     dojo = Dojo.get_dojo_ninjas({"id": id})
#     return render_template('dojo_members.html', dojo=dojo)

# @app.route("/new_user")
# def load_all():
#     return render_template("add_user.html")

# @app.route('/create_user', methods=["POST"])
# def create_user():

#     # data = {
#     #     "first_name": request.form["first_name"],
#     #     "last_name" : request.form["last_name"],
#     #     "email" : request.form["email"]
#     # }
#     User.save(request.form)
#     return redirect('/')



# @app.route('/edit_user/<int:id>')
# def load_edit(id):
    
#     user = User.get_one(id)
#     return render_template('edit_user.html', user=user)

# @app.route('/edit_user', methods=["POST"])
# def edit_user():
#     # data = {
#     #     "first_name": request.form["first_name"],
#     #     "last_name" : request.form["last_name"],
#     #     "email" : request.form["email"]
#     # }
#     User.edit(request.form)
#     return redirect(f'/show_user/{request.form['id']}')

# @app.route('/delete_user/<int:id>')
# def delete_user(id):

#     User.delete({'id': id})
#     return redirect('/')