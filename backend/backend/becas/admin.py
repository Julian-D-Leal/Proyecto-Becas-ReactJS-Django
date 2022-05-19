from django.contrib import admin

# Register your models here.

from .models import Beca,User,root,guest

admin.site.register(Beca)
admin.site.register(User)
admin.site.register(root)
admin.site.register(guest)