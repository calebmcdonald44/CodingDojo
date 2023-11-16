from flask import render_template, request, redirect, session

from flask_app import app

from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

@app.route("/new_ninja")
def new_ninja():
    dojos = Dojo.get_all()
    return render_template('new_ninjas.html', dojos=dojos)

@app.route('/create_ninja', methods=["POST"])
def create_ninja():
    Ninja.create(request.form)
    dojo = request.form['dojo_id']
    return redirect(f'/show_dojo/{dojo}')

# # @app.route("/new_user")
# # def load_all():
# #     return render_template("add_user.html")


# # @app.route('/show_user/<int:id>')
# # def load_one(id):

# #     user = User.get_one(id)
# #     return render_template('one_user.html', user=user)

# # @app.route('/edit_user/<int:id>')
# # def load_edit(id):
    
# #     user = User.get_one(id)
# #     return render_template('edit_user.html', user=user)

# # @app.route('/edit_user', methods=["POST"])
# # def edit_user():
# #     # data = {
# #     #     "first_name": request.form["first_name"],
# #     #     "last_name" : request.form["last_name"],
# #     #     "email" : request.form["email"]
# #     # }
# #     User.edit(request.form)
# #     return redirect(f'/show_user/{request.form['id']}')

# # @app.route('/delete_user/<int:id>')
# # def delete_user(id):

# #     User.delete({'id': id})
# #     return redirect('/')