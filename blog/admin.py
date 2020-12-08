from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Blog
from django.utils.html import format_html

class BlogAdmin(admin.ModelAdmin): 
    def change_button(self, obj):
        return format_html('<a class="btn" href="/admin/blog/blog/{}/change/">Change</a>', obj.id)

    def delete_button(self, obj):
        return format_html('<a class="btn" href="/admin/blog/blog/{}/delete/">Delete</a>', obj.id) 
    list_display = ('id','title', 'Author',  'Image', 'created_on','text', 'change_button', 'delete_button') 
    
    class Media:
        js = ('ckeditor.js',)


admin.site.register(Blog, BlogAdmin)