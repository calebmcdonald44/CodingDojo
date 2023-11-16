from flask import render_template, request, redirect, session

from flask_app import app

from flask_app.models.user import User

@app.route("/")
def index():
    users = User.get_all()
    print(users)
    return render_template("all_users.html", users=users)

@app.route("/new_user")
def load_all():
    return render_template("add_user.html")

@app.route('/create_user', methods=["POST"])
def create_user():

    # data = {
    #     "first_name": request.form["first_name"],
    #     "last_name" : request.form["last_name"],
    #     "email" : request.form["email"]
    # }
    User.save(request.form)
    return redirect('/')

@app.route('/show_user/<int:id>')
def load_one(id):

    user = User.get_one(id)
    return render_template('one_user.html', user=user)

@app.route('/edit_user/<int:id>')
def load_edit(id):
    
    user = User.get_one(id)
    return render_template('edit_user.html', user=user)

@app.route('/edit_user', methods=["POST"])
def edit_user():
    # data = {
    #     "first_name": request.form["first_name"],
    #     "last_name" : request.form["last_name"],
    #     "email" : request.form["email"]
    # }
    User.edit(request.form)
    return redirect(f'/show_user/{request.form['id']}')

@app.route('/delete_user/<int:id>')
def delete_user(id):

    User.delete({'id': id})
    return redirect('/')