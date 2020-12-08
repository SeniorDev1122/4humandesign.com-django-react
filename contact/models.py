from django.db import models

# Create your models here.
class Contact(models.Model):
    username = models.CharField(max_length=120)
    email = models.EmailField(max_length=100)
    title =  models.CharField(max_length=120)
    message = models.CharField(max_length=1000)
    def _str_(self):
        return self.title