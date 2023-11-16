from flask import render_template, request, redirect, session, flash

from flask_app import app

from flask_app.models.user import User

from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 

@app.route("/")
def index():
    session.clear()
    return render_template("home.html")

@app.route("/register_user", methods=["POST"])
def register():
    if not User.validate(request.form):
        return redirect('/')
    
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "password_hash": bcrypt.generate_password_hash(request.form['password'])
    }
    session['first_name'] = request.form["first_name"]
    User.create(data)
    return redirect("/user_page")

@app.route('/user_page')
def load_user():
    if not 'id' in session:
        return redirect('/')
    else:
        return render_template('user_page.html')

@app.route("/login_user", methods=["POST"])
def login_user():

    users = User.get_all()
    for user in users:
        print('\n\n')
        print(f'{user.email}, {user.password_hash}')
        print(f'{bcrypt.check_password_hash(user.password_hash, request.form["password"])}')
        print('\n\n')
        if user.email == request.form['email'] and bcrypt.check_password_hash(user.password_hash, request.form["password"]):
            session['first_name'] = user.first_name
            session['id'] = user.id
            return redirect('/user_page')
        
    flash("Email or password is incorrect")
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