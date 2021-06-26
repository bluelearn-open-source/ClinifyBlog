## Create Author
id is created automatically
```
mutation createMutation {
  createAuthor(authorData: {name: "put name here", picture: "link of the image"}){
    author{
      id
      name
      picture
    }
  }
}
```

## Update Author
n is numeric id
```
mutation updateMutation {
  updateAuthor(authorData: {id: n, name: "put updated name here", picture: "updated link of the image"}){
    author{
      id
      name
      picture
    }
  }
}
```

## Delete Author
n is numeric id
```
mutation deleteMutation{
  deleteAuthor(id: n) {
    author {
      id
    } 
  }
}
```


## Create Post
slug and id is created automatically
```
mutation createMutation {
  createPost(postData: {title: "put title here", author: authorID, backgroundlink: "link of the image", category: "put category here"}){
    post{
      id
      title
      slug
      backgroundlink
      category
      author {
        id
        name
        picture
      }
    }
  }
}
```


## Update Post
n is numeric id
```
mutation updateMutation {
  updatePost(postData: {id: n, title: "put updated title here", slug: "put updated slug here", author: authorID, backgroundlink: "updated link of the image", category: "put updated category here"}){
    post{
      id
      title
      slug
      backgroundlink
      category
      author {
        id
        name
        picture
      }
    }
  }
}
```

## Delete Post
n is numeric id
```
mutation deleteMutation{
  deletePost(id: n) {
    post {
      id
    } 
  }
}
```


## to get all posts
```
query {
  allPosts {
    id
    title
    slug
    category
    author {
      id
      name
      picture
    }
    backgroundlink
  }
}
```


## to get 1 post
where n is any valid post id
```
query {
  post(postId: n){
    id
    title
    slug
    category
    author {
      id
      name
      picture
    }
    backgroundlink
  }
}
```


## to get all authors
```
query {
  allAuthors {
    id
    name
    picture
  }
}
```


## to get 1 author
where n is any valid author id
```
query {
  author(authorId: n){
    id
    name
    picture
  }
}
```