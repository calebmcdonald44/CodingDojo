from django.shortcuts import render, redirect

def index(request):
    return render(request, 'index.html')

def result(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comments'] = request.POST['comments']
    return redirect('show')

def show(request):
    return render(request, 'show.html')