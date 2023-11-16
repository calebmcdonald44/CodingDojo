from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# Loads login/registration page, clears relevant session variables
@app.route("/")
def index():
    if 'id' in session:
        session.pop('id')
    if 'username' in session:
        session.pop('username')
    return render_template("index.html")


# Checks if username is in database and if entered password matches the password hash associated with it
# Redirects to login/registration if username and password do not match
@app.route("/login_user", methods=["POST"])
def login_user():
    if User.validate_login(request.form):
        session['username'] = request.form['username']
        return redirect(f"/play_setup/{session['username']}")
    
    flash('Username or password is incorrect')
    return redirect("/")


# Makes sure all fields pass validation before creating user, redirects to login/registration if validation fails
@app.route("/register_user", methods=["POST"])
def register_user():
    if not User.validate_register(request.form):
        return redirect("/")
    
    session['username'] = request.form['username']

    data = {
        'username': request.form['username'],
        'password_hash': bcrypt.generate_password_hash(request.form['password'])
    }
    User.create_user(data)

    return redirect(f"/play_setup/{session['username']}")


# Loads proper play setup page based on username, colors and board used to render chess board options
@app.route("/play_setup/<username>")
def load_setup(username):
    if not 'username' in session:
        return redirect("/")
    
    data = {
        "username": username
    }
    user = User.get_one(data)
    colors = ['blue', 'green', 'red']
    board = 8

    return render_template('play_setup.html', colors=colors, user=user, board=board)

