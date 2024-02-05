from django.db import models

class CourseManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name']) < 2:
            errors["name"] = "Course name should be at least 5 characters"
        if len(postData['description']) < 15:
            errors["description"] = "Course description should be at least 15 characters"
        return errors

class Course(models.Model):
    name = models.CharField(max_length=60)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()
