from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response
from .serializers import UserSerializer, EducationSerializer, WorkSerializer, PortfolioSerializer
from .models import Education, Work, Portfolio
    

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined') 
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    def list(self, request, *args, **kwargs):
            queryset = self.filter_queryset(self.get_queryset())
            #excluding first two test entries
            queryset = queryset[2:]
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)

class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def list(self, request, *args, **kwargs):
            queryset = self.filter_queryset(self.get_queryset())
            #excluding first three test entries
            queryset = queryset[3:]
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)