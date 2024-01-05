from django.shortcuts import render, redirect
from .models import Show

def index(request):
    return redirect('add_show')

def add_show(request):
    return render(request, 'add_show.html')

def create(request):
    new_title = request.POST.get('title')
    new_network = request.POST.get('network')
    new_release = request.POST.get('release')
    new_desc = request.POST.get('desc')
    Show.objects.create(title=new_title, network=new_network, release=new_release, desc=new_desc)
    return redirect('all_shows')

def all_shows(request):
    all_shows = Show.objects.all()
    context = {
        'all_shows': all_shows
    }
    return render(request, 'all_shows.html', context)

def one_show(request, show_id):
    context = {
        "show": Show.objects.get(id=show_id)
    }
    return render(request, 'one_show.html', context)

def delete(request, show_id):
    this_show = Show.objects.get(id=show_id)
    this_show.delete()
    return redirect('all_shows')

def edit(request, show_id):
    this_show = Show.objects.get(id=show_id)
    context = {
        "show": this_show,
        "release": str(this_show.release)
    }
    return render(request, 'edit_show.html', context)

def update(request, show_id):
    this_show = Show.objects.get(id=show_id)
    this_show.title = request.POST.get('title')
    this_show.network = request.POST.get('network')
    this_show.release = request.POST.get('release')
    this_show.desc = request.POST.get('desc')
    this_show.save()
    return redirect(f'/shows/{show_id}/')