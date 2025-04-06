from django.contrib import admin

from api.models import Company , Vacancy 

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin) : 
    ...

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin) : 
    ...

