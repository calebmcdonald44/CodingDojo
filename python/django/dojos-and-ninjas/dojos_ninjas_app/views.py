from django.shortcuts import render, redirect
from .models import Dojo, Ninja

def index(request):
    dojos = Dojo.objects.all()
    ninjas = Ninja.objects.all()
    context = {
        'dojos': dojos,
        'ninjas': ninjas
    }
    return render(request, 'index.html', context)

def create_ninja(request):
    new_dojo = request.POST.get('dojo')
    new_first_name = request.POST.get('first_name')
    new_last_name = request.POST.get('last_name')
    Ninja.objects.create(dojo=Dojo.objects.get(id=new_dojo), first_name=new_first_name, last_name=new_last_name)
    return redirect('index')

def create_dojo(request):
    print(f"\nCREATE DOJO ROUTE ACTIVATED\n")
    new_name = request.POST.get('name')
    new_city = request.POST.get('city')
    new_state = request.POST.get('state')
    Dojo.objects.create(name=new_name, city=new_city, state=new_state)
    return redirect('index')

def delete_dojo(request):
    print("DELETE ROUTE ACTIVATED!")
    print(request.POST.get('dojo_id'))
    dojo_to_delete = Dojo.objects.get(id=request.POST.get('dojo_id'))
    dojo_to_delete.delete()
    return redirect('index')
