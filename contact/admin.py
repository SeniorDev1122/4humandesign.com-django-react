from django.contrib import admin
from .models import Contact

class ContactAdmin(admin.ModelAdmin):  
    list_display = ('id','username', 'email', 'title',  'message') 


admin.site.register(Contact, ContactAdmin)