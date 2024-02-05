from django.shortcuts import render, redirect
from .models import Course
from django.contrib import messages

def index(request):
    courses = Course.objects.all()
    context = {
        'courses': courses
    }
    return render(request, 'index.html', context)

def add_course(request):
    errors = Course.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        new_name = request.POST.get('name')
        new_description = request.POST.get('description')
        Course.objects.create(name=new_name, description=new_description)
        return redirect('index')

def delete_course(request, course_id):
    current_course = Course.objects.get(id=course_id)
    context = {
        'course': current_course
    }
    return render(request, 'delete.html', context)

def destroy_course(request, course_id):
    course = Course.objects.get(id=course_id)
    course.delete()
    return redirect('/')