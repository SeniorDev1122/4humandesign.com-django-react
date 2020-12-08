from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField
# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=120)
    Author = models.CharField(max_length=120)
    Image = models.ImageField(max_length=255, upload_to='images/')
    text = RichTextField(config_name='awesome_ckeditor',null = True,  blank = True)
    
    created_on = models.DateField(default = timezone.now)
    update_on = models.DateField( default = timezone.now, null = True,  blank = True)
    def _str_(self):
        return self.title