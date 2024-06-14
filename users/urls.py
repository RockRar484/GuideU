from django.urls import path
from .views import SignupView, LoginView, NewsView, admin_only_view, CRLAvailInstiView, CatAvailInstiView, TopBranchesYearWise

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('news/', NewsView.as_view(), name='news'),
    path('crlavailinsti/', CRLAvailInstiView.as_view(), name='crlavailinsti'),
    path('catavailinsti/', CatAvailInstiView.as_view(), name='catavailinsti'),
    path('topbranchesyearwise/', TopBranchesYearWise.as_view(), name='topbranchesyearwise'),
    path('admin-view/', admin_only_view, name='admin-view'),
]
