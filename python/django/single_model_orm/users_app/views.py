from django.shortcuts import render, redirect
from .models import Users

def index(request):
    users = Users.objects.all()
    context = {
        'users': users
    }
    return render(request, 'index.html', context)

def create(request):
    user_data = {
        'first_name': request.POST.get('first_name'),
        'last_name': request.POST.get('last_name'),
        'email_address': request.POST.get('email_address'),
        'age': request.POST.get('age'),
    }
    new_user = Users.objects.create(**user_data)
    return redirect('index')
