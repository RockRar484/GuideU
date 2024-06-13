from django.urls import path
from .views import SignupView, LoginView, NewsView, admin_only_view

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('news/', NewsView.as_view(), name='news'),
    path('admin-view/', admin_only_view, name='admin-view'),
]
