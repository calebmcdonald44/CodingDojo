from django.shortcuts import render, redirect
from django.http import HttpResponse
from users import views
from .models import Character

def first_view(request):
    return HttpResponse('Howdy!')

def create_character(request):
    return render(request, 'create_character.html')

def post_char(request):
    print(f"HERE IS THE POST DATA: \n", request.POST)
    if request.method == 'POST':
        character_data = {
            'name': request.POST.get('name'),  # Retrieves the 'name' value from POST data
            'char_class': request.POST.get('char_class'),  # Retrieves the 'char_class' value from POST data
            'level': request.POST.get('level'),  # ...similarly for other fields
            'exp': request.POST.get('exp'),
            'str_stat': request.POST.get('str_stat'),
            'dex_stat': request.POST.get('dex_stat'),
            'con_stat': request.POST.get('con_stat'),
            'int_stat': request.POST.get('int_stat'),
            'wis_stat': request.POST.get('wis_stat'),
            'cha_stat': request.POST.get('cha_stat'),
            'background': request.POST.get('background')
        }
        request.session["character_data"] = character_data
        new_char = Character.objects.create(**character_data)
        return redirect('dashboard')
    return render(request, 'dashboard')

def view_character(request, char_id):
    character = Character.objects.get(id=char_id)  # Retrieve the Character instance with the given char_id
    context = {
        "character": character  # Context variable 'character' to pass to the template
    }
    return render(request, 'view_character.html', context)  # Render the view_character.html template with the context

def edit_character(request, char_id):
    character = Character.objects.get(id=char_id)  # Retrieve the Character instance with the given char_id
    context = {
        "character": character  # Context variable 'character' to pass to the template
    }
    return render(request, 'edit_character.html', context)  # Render the edit_character.html template with the context

def update_character(request, char_id):
    if request.method == 'POST':  # Check if the request method is POST
        character_data = {
            # Retrieves values from POST data similar to post_char function
            'name': request.POST.get('name'),
            # ...
            'background': request.POST.get('background')
        }
        character = Character.objects.get(id=char_id)  # Retrieve the Character instance with the given char_id
        for key, value in character_data.items():
            setattr(character, key, value)  # Update each field of the character with new values
        character.save()  # Save the changes to the character in the database
        return redirect('dashboard')  # Redirect to the 'dashboard' view
    else:
        pass  # No action for non-POST requests