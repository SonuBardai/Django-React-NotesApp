from django.db import models
from django.template.defaultfilters import slugify

class Note(models.Model):
    title = models.CharField(max_length=250)
    slug = models.CharField(max_length=150, blank=True)
    content = models.TextField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title