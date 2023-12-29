from django.shortcuts import render, redirect

def index(request):
    if 'counter' in request.session:
        request.session['counter'] += 1
    else:
        request.session['counter'] = 0
    if 'page_visits' in request.session:
        request.session['page_visits'] += 1
    else:
        request.session['page_visits'] = 0
    return render(request, 'index.html')

def two(request):
    request.session['counter'] += 1
    return redirect('index')

def custom(request):
    request.session['counter'] += (int(request.POST['amount']) - 1)
    return redirect('index')

def destroy_session(request):
    request.session['counter'] = 0
    request.session['page_visits'] = 0
    return redirect('index')

