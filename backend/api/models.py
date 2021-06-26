from django.db import models
from slugify import slugify

# Create your models here.
class Author(models.Model):
  name = models.CharField(max_length=100)
  picture = models.CharField(max_length=5000)

  def __str__(self):
    return self.name

class Post(models.Model):
  title = models.CharField(max_length=500)
  backgroundlink = models.CharField(max_length=5000)
  slug = models.CharField(max_length=1000, unique=True, null=True, blank=True)
  category = models.CharField(max_length=100)
  author = models.ForeignKey(Author, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.title

  def save(self, *args, **kwargs):
    slug = slugify(self.title + str(self.id))
    self.slug = slug
    super(Post, self).save(*args, **kwargs)
