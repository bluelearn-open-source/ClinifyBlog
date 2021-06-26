import graphene

from graphene_django import DjangoObjectType, DjangoListField 
from .models import Post, Author 


class PostType(DjangoObjectType): 
    class Meta:
        model = Post
        fields = "__all__"

class AuthorType(DjangoObjectType): 
    class Meta:
        model = Author
        fields = "__all__"


class Query(graphene.ObjectType):
    all_posts = graphene.List(PostType)
    post = graphene.Field(PostType, post_id=graphene.Int())
    all_authors = graphene.List(AuthorType)
    author = graphene.Field(AuthorType, author_id=graphene.Int())

    def resolve_all_posts(self, info, **kwargs):
        return Post.objects.all()

    def resolve_post(self, info, post_id):
        return Post.objects.get(pk=post_id)

    def resolve_all_authors(self, info, **kwargs):
        return Author.objects.all()

    def resolve_author(self, info, author_id):
        return Author.objects.get(pk=author_id)
  
class PostInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String()
    author = graphene.Int()
    category = graphene.String()
    backgroundlink = graphene.String() 

class AuthorInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    picture = graphene.String()

class CreatePost(graphene.Mutation):
    class Arguments:
        post_data = PostInput(required=True)

    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, info, post_data=None):
        post_instance = Post( 
            title=post_data.title,
            author=Author.objects.get(pk=post_data.author),
            backgroundlink=post_data.backgroundlink,
            category = post_data.category
        )
        post_instance.save()
        return CreatePost(post=post_instance)

class CreateAuthor(graphene.Mutation):
    class Arguments:
        author_data = AuthorInput(required=True)

    author = graphene.Field(AuthorType)

    @staticmethod
    def mutate(root, info, author_data=None):
        author_instance = Author( 
            name=author_data.name,
            picture=author_data.picture,
        )
        author_instance.save()
        return CreateAuthor(author=author_instance)

class UpdatePost(graphene.Mutation):
    class Arguments:
        post_data = PostInput(required=True)

    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, info, post_data=None):

        post_instance = Post.objects.get(pk=post_data.id)

        if post_instance:
            post_instance.title = post_data.title
            post_instance.author = Author.objects.get(pk=post_data.author)
            post_instance.backgroundlink = post_data.backgroundlink
            post_instance.category = post_data.category
            post_instance.save()

            return UpdatePost(post=post_instance)
        return UpdatePost(post=None)

class UpdateAuthor(graphene.Mutation):
    class Arguments:
        author_data = AuthorInput(required=True)

    author = graphene.Field(AuthorType)

    @staticmethod
    def mutate(root, info, author_data=None):

        author_instance = Author.objects.get(pk=author_data.id)

        if author_instance:
            author_instance.name = author_data.name
            author_instance.picture = author_data.picture
            author_instance.save()

            return UpdateAuthor(author=author_instance)
        return UpdateAuthor(post=None)

class DeletePost(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, info, id):
        post_instance = Post.objects.get(pk=id)
        post_instance.delete()

        return None


class DeleteAuthor(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    author = graphene.Field(AuthorType)

    @staticmethod
    def mutate(root, info, id):
        author_instance = Author.objects.get(pk=id)
        author_instance.delete()

        return None

class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()
    update_post = UpdatePost.Field()
    delete_post = DeletePost.Field()
    create_author = CreateAuthor.Field()
    update_author = UpdateAuthor.Field()
    delete_author = DeleteAuthor.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
