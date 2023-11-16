from flask import render_template, request, redirect, session, flash

from flask_app import app

from flask_app.models.user import User
from flask_app.models.recipe import Recipe

from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 


@app.route("/")
def index():
    # session.clear()
    session['id'] = ''
    session['first_name'] = ''
    session['recipe_id'] = ''
    session['legit'] = False
    return render_template("home.html")


@app.route("/register_user", methods=["POST"])
def register():

    if not User.validate_register(request.form):
        print(f'\n{'validate failed'}\n')
        return redirect('/')
    
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "password_hash": bcrypt.generate_password_hash(request.form['password'])
    }

    session['first_name'] = request.form["first_name"]
    session['email'] = request.form['email']
    session['legit'] = True

    User.create(data)

    users = User.get_all()
    for user in users:
        if user.email == session['email']:
            session['id'] = user.id

    return redirect(f"/user_page/{session['id']}")


@app.route("/login_user", methods=["POST"])
def login_user():

    users = User.get_all()
    for user in users:
        if user.email == request.form['email'] and bcrypt.check_password_hash(user.password_hash, request.form["password"]):
            session['first_name'] = user.first_name
            session['id'] = user.id
            session['legit'] = True
            return redirect(f'/user_page/{session['id']}')
        
    flash("Email or password is incorrect", 'login')
    return redirect('/')


@app.route('/user_page/<int:id>')
def load_user(id):
    if session['legit']:
        recipes = Recipe.get_all()
        return render_template('user_page.html', recipes=recipes)
    return redirect('/')


# @app.route('/delete_email', methods=["POST"])
# def delete():
#     Email.delete(request.form)
#     return redirect('/show_emails')

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