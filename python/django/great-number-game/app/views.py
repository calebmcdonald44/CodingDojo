from django.shortcuts import render, redirect
import random

def index(request):
    if request.session['guess']:
        del request.session['guess']
    request.session['number'] = random.randint(1, 100)
    return redirect('home')

def home(request):
    return render(request, 'home.html')

def guess(request):
    request.session['guess'] = int(request.POST.get('guess'))
    return redirect('home')

def reset(request):
    return redirect('index')