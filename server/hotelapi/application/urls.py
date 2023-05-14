# import statistics
# import statistics
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenObtainPairView,
    TokenVerifyView
)

urlpatterns=[
    path('datas',views.DataAPIView.as_view(),name='datas'),
    path('userregister',views.UserregisterAPIView.as_view(),name='userregister'),
    path('login',views.LoginAPIView.as_view(),name='login'),
    path('getuser',views.getuserAPIView.as_view(),name='getuser'),
    path('updateuser/<int:id>',views.updateuserAPIView.as_view(),name='updateuser'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('singleuser/<int:id>',views.SingleUserAPIView.as_view(),name='singleuser'),
    path('deleteuser/<int:id>',views.deleteUserAPIView.as_view(),name='deleteuser'),
    path('Addrooms',views.RoomsAPIView.as_view(),name='Addrooms'),
    path('getroom',views.getroomAPIView.as_view(),name='getroom'),
    path('singleroom/<int:id>',views.singleroomAPIView.as_view(),name='singleroom'),
    path('updateroom/<int:id>',views.updateroomAPIView.as_view(),name='updateroom'),
    path('deleteroom/<int:id>',views.deleteroomAPIView.as_view(),name='deleteroom')
]