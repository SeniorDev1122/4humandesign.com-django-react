from django.shortcuts import render
from rest_framework import viewsets 
from .serializers import ContactSerializer
from .models import Contact
from django.core.mail import EmailMessage
from django.core.mail import send_mail
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
import os, environ
env = environ.Env()
env.read_env(env.str('ENV', '.env'))
# Create your views here.

class ContactView(viewsets.ModelViewSet):       # add this
    serializer_class = ContactSerializer          # add this
    queryset = Contact.objects.all() 
    
    
    def create(self, request, *args, **kwargs):
        try:
            
            data = request.data
            send_mail(
                data.get('title'),
                data.get('message'),
                data.get('email'),
                [env('TO_EMAIL')],
            )
        
            return super().create(request, args, **kwargs)

        
        

       
        except Exception as e:
            print(e)
            return HttpResponse("false")
