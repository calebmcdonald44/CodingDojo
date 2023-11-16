from flask import render_template, request, redirect, session, flash

from flask_app import app

from flask_app.models.recipe import Recipe
from flask_app.models.user import User

from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 


@app.route("/new_recipe")
def new_recipe():
    print(f'\n\n{session['id']}\n\n')
    return render_template("new_recipe.html")


@app.route("/create_recipe", methods=["POST"])
def create_recipe():

    if not Recipe.validate_recipe(request.form):
        return redirect('/new_recipe')

    data = {
        "name": request.form['name'],
        "description": request.form['description'],
        "instructions": request.form['instructions'],
        "date_cooked": request.form['date_cooked'],
        "under_30": request.form['under_30'],
        "user_id": session['id']
    }

    recipe = Recipe.create(data)
    return redirect(f'/recipe_page/{recipe}')


@app.route('/recipe_page/<int:id>')
def recipe_page(id):
    data = {'id': id}
    recipe = Recipe.get_one(data)

    return render_template('recipe_page.html', recipe=recipe)


@app.route('/delete_recipe/<int:id>', methods=["POST"])
def delete_recipe(id):
    data = {'id': id}
    Recipe.delete(data)

    return redirect(f'/user_page/{session['id']}')


@app.route('/edit_recipe/<int:id>')
def edit_recipe(id):
    session['recipe_id'] = id
    data = {'id': id}
    recipe = Recipe.get_one(data)
    return render_template('edit_recipe.html', recipe=recipe)


@app.route('/update_recipe/<int:id>', methods=["POST"])
def update_recipe(id):

    if not Recipe.validate_recipe(request.form):
        return redirect(f'/edit_recipe/{session['recipe_id']}')

    data = {
    "name": request.form['name'],
    "description": request.form['description'],
    "instructions": request.form['instructions'],
    "date_cooked": request.form['date_cooked'],
    "under_30": request.form['under_30'],
    "user_id": session['id']
    }
    updated = Recipe.edit(data)

    return redirect (f'/recipe_page/{id}')


