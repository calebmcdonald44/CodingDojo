from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/save_inputs', methods = ['POST'])
def saveInputs():
    if not User.validate_user(request.form):
        return redirect('/')
    user = User.create(request.form)
    return redirect(f'/result/{user}')

@app.route('/result/<int:id>')
def result(id):
    user = User.get_user({'id': id})
    return render_template('result.html', user=user)
