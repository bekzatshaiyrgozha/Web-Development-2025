
from django.contrib import admin
from django.urls import path
from api import views
urlpatterns = [
    path('companies/', views.companies_list), 
    path('companies/<int:company_id>/' , views.company_details), 
    path('companies/<int:company_id>/vacancies/' , views.company_vacancies), 
    path('vacancies/' , views.vacancies_list), 
    path('vacancies/<int:vacancy_id>' , views.vacancy_details), 
    path('vacancies/top10/' , views.topTen_vacancies), 
]
