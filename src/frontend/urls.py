from django.urls import path,re_path
from .views import Index as index_view


urlpatterns = [
    path('',index_view),
    re_path(r'^.*/$',index_view),
]