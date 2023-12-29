from django.shortcuts import render, redirect
import random

def reset(request):
    request.session['gold'] = 0
    request.session['log'] = []
    del request.session['field']
    return redirect('index')

def index(request):
    return render(request, 'index.html')

def submit(request):
    # setting log equal to empty list if not in session
    if 'log' not in request.session:
        request.session['log'] = []

    # creating a session variable for field for displaying on HTML
    request.session['field'] = request.POST.get('field')

    # generating gold and log message for farm
    if request.POST.get('field') == 'farm':
        random_number = random.randint(10, 12)
        request.session['gold'] += random_number
        request.session['log'].append(f"Earned {random_number} gold from the {request.session['field']}!")

    # generating gold and log message for cave
    elif request.POST.get('field') == 'cave':
        random_number = random.randint(5, 10)
        request.session['gold'] += random_number
        request.session['log'].append(f"Earned {random_number} gold from the {request.session['field']}!")

    # generating gold and log message for house
    elif request.POST.get('field') == 'house':
        random_number = random.randint(2, 5)
        request.session['gold'] += random_number
        request.session['log'].append(f"Earned {random_number} gold from the {request.session['field']}!")

    # generating gold and log message for casino
    else:
        random_number = random.randint(-50, 50)
        request.session['gold'] += random_number
        if random_number >= 0:
            request.session['log'].append(f"You won {random_number} gold at the {request.session['field']}! Score!")
        else:
            request.session['log'].append(f"You lost {abs(random_number)} gold at the {request.session['field']}... yikes.")

    print(f"THE FIELD IS: {request.session['field']}")
    return redirect('index')