from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask import jsonify


@app.route("/attempt_info", methods=['POST'])
def attempt_info():

    session['time'] = request.form['time']
    session['difficulty'] = request.form['difficulty']
    session['board_color'] = request.form['board_color']

    return redirect("/attempt_active")

# Page that stays rendered during the duration of attempt
@app.route("/attempt_active")
def attempt_active():
    if not 'username' in session:
        return redirect("/")
    

    return render_template("attempt_active.html")

