from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse

def register(request):
    return HttpResponse('placeholder for users to create a new user record')

def login(request):
    return HttpResponse('placeholder for users to log in')

def users(request):
    return HttpResponse('placeholder to later display the list of all users')


