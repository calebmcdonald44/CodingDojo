from django.db import models
import bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['first_name']) < 2 or len (postData['last_name']) < 2:
            errors["name"] = "First and last name should be at least 2 characters"
        if not EMAIL_REGEX.match(postData['email']):
            errors["email"] = "Invalid email"
        if len(postData['password']) < 8:
            errors["password"] = "Password should be at least 8 characters"
        if postData['password']!=postData['confirm']:
            errors["password"] = "Passwords must match"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

def __str__(self) -> str:
    return f'User: {self.first_name}'

    @classmethod
    def get_all(cls):
        return cls.objects.all()
    
    @classmethod
    def add(cls, data):
        password = data['password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        return cls.objects.create(first_name=data['first_name'], last_name=data['last_name'], email=data['email'], password=pw_hash)
    
    @classmethod
    def get_by_id(cls, id):
        return cls.objects.get(id=id)
    
    @classmethod
    def destroy(cls, id):
        cls.objects.get(id=id).delete()
