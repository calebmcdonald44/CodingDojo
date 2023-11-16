from flask import render_template, request, redirect, session, flash

from flask_app import app

from flask_app.models.email import Email

@app.route("/")
def index():
    return render_template("enter_email.html")

@app.route("/create_email", methods=["POST"])
def create():
    if not Email.validate(request.form):
        return redirect('/')
    Email.create(request.form)
    return redirect("/show_emails")

@app.route('/show_emails')
def load_all():
    emails = Email.get_all()
    flash('The email address you entered is a VALID email address! Thank you!')
    return render_template('show_emails.html', emails=emails)

@app.route('/delete_email', methods=["POST"])
def delete():
    Email.delete(request.form)
    return redirect('/show_emails')

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