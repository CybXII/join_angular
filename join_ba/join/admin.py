from django.contrib import admin
from .models import BoardItem, Contact

# Register your models here.
@admin.register(BoardItem)
class BoardItemAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'description', 'category', 'checked', 'get_assigned_users','created_at','author')# , 
    search_fields = ('title', 'description', 'category', 'author__username' ) # ,.'assignedTo__first_name', 'assignedTo__last_name'
    filter_horizontal = ('assignedTo',)
    def get_assigned_users(self, obj):
        # Hier werden die zugewiesenen Benutzer aufgelistet
        return ", ".join([f"{user.first_name} {user.last_name}" for user in obj.assignedTo.all()])
    
    # Setze den Anzeigenamen für die Spalte im Admin-Panel
    get_assigned_users.short_description = 'Assigned To'

admin.site.register(Contact)
