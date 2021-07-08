import graphene

from graphene_django import DjangoObjectType, DjangoListField 
from .models import Post, Author 
from .models import Tree, User

class userType(DjangoObjectType):
    class Meta:
        model = User
        field = "__all__"

class treeType(DjangoObjectType):
    class Meta:
        model = Tree
        field = "__all__"



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
    all_users = graphene.List(userType)
    one_user = graphene.Field(userType, user_id= graphene.Int())
    all_tress = graphene.List(treeType)
    tree = graphene.Field(treeType, tree_id=graphene.Int())

    def resolve_all_users(self, info, **kwargs):
        return User.objects.all()

    def resolve_user(self, info, user_id):
        return User.objects.get(pk=user_id)

    def resolve_all_tress(self, info, **kwargs):
        return Tree.objects.all()

    def resolve_tree(self, info, tree_id):
        return Tree.objects.get(pk=tree_id)

    def resolve_all_posts(self, info, **kwargs):
        return Post.objects.all()

    def resolve_post(self, info, post_id):
        return Post.objects.get(pk=post_id)

    def resolve_all_authors(self, info, **kwargs):
        return Author.objects.all()

    def resolve_author(self, info, author_id):
        return Author.objects.get(pk=author_id)
  

class UserInput(graphene.InputObjectType):
    id = graphene.ID()
    discord_id = graphene.String()
    discord_tag =  graphene.String()
    avatar = graphene.String()
    status = graphene.Boolean()
    xp = graphene.Int()
    coins = graphene.Int()
    tress_unlocked = graphene.List(graphene.Int)

class TreeInput(graphene.InputObjectType):
    id = graphene.ID()
    tree_id = graphene.Int()
    tree_name = graphene.String()
    tree_url = graphene.String()
    price = graphene.Int()
    xp_plant = graphene.Int()
    time_plant = graphene.Int()
    version_level = graphene.String()

class DeleteTree(graphene.Mutation):
    class Arguements:
        id = graphene.ID()

    tree = graphene.Field(treeType)

        
    def mutate(root, info , id):
         tree_instance = Tree.objects.get(pk = id)
         tree_instance.delete()

         return None


class DeleteUser(graphene.Mutation):
    class Arguements:
        id = graphene.ID()

    user = graphene.Field(userType)

    def mutate(root, info , id):
        user_instance = User.objects.get(pk=id)
        user_instance.delete()

        return None

class CreateTree(graphene.Mutation):
    class Arguments:
        tree_data = TreeInput(required=True)
    

    tree = graphene.Field(treeType)

    @staticmethod
    def mutate(root, info, tree_data=None):
        tree_instance = Tree( 
            tree_id = tree_data.tree_id,
            tree_name = tree_data.tree_name,
            tree_url = tree_data.tree_url,
            price = tree_data.price,
            xp_plant = tree_data.xp_plant,
            time_plant = tree_data.time_plant,
            version_level = tree_data.version_level,
        )
        tree_instance.save()
        return CreateUser(tree=tree_instance)

class CreateUser(graphene.Mutation):
    class Arguments:
        user_data = UserInput(required=True)

    user = graphene.Field(userType)

    @staticmethod
    def mutate(root, info, user_data=None):
        user_instance = User( 
            discord_id= user_data.discord_id,
            discord_tag = user_data.discord_tag,
            avatar = user_data.avatar,
            status = user_data.status,
            xp = user_data.xp,
            coins = user_data.coins
            

        )
        
        user_instance.save()
        for i in user_data.tress_unlocked:
            user_instance.tress_unlocked.add(i)
        return CreateUser(user=user_instance)




class PostInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String()
    author = graphene.Int()
    category = graphene.String()
    backgroundlink = graphene.String() 
    content = graphene.String()

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
            category = post_data.category,
            content = post_data.content
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
            post_instance.content = post_data.content
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
    create_user = CreateUser.Field()
    delete_user = DeleteUser.Field()
    create_tree = CreateTree.Field()
    delete_tree = DeleteTree.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)