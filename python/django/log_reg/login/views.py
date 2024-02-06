from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, 'index.html')

def login(request):
    # checking if username exists
    user = User.objects.filter(email=request.POST['email'])
    if user:
    # this is a fine way to choose user as long as we prevent duplicate usernames in validation
        logged_user = user[0]
        # checks if passwords match
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            # sets ID in session and redirects to success page
            request.session['userid'] = logged_user.id
            return redirect('/success/')
    # if user doesn't exist/passwords don't match, reload login page with validation messages
    return redirect('/')

def register(request):
    if 'email_error' in request.session:
        del request.session['email_error']
    results = User.objects.filter(email = request.POST['email'])
    if len(results) > 0:
        request.session['email_error'] = "Email is already associated with an account"
        return redirect('/')
    errors = User.objects.basic_validator(request.POST)
    if len(errors)>0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        user = User.add({
            'first_name': request.POST['first_name'],
            'last_name': request.POST['last_name'],
            'email': request.POST['email'],
            'password': request.POST['password'],
            'confirm': request.POST['confirm']
        })
        request.session['user_id'] = user.id
    return redirect("/success")

def success(request):
    return render(request, 'success.html')
