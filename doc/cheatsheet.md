# GraphQL Resource For Study

- 


```
localhost:4000/graphql?query=

{
    books {
        id
        name
        genre
        author {
            id
            name
            age
        }
    }
}

{
    authors {
        id
        name
        age
        books {
            id
            name
            genre
        }
    }
}

{
    book(id: "12141241") {   // or book(id: 12141241)
        id
        name
        genre
        author {
            name
            age
            books {
            	id
                name
                genre
            }
        }
    }
}

{
    author(id: "1212121") {
        id
        name
        age
        books {
        	id
            name
            genre
        }
    }
}

mutation {
    addAuthor(name: "Aa", age: 14) {
        name
        age
    }
}

mutation {
    addBook(name: "aA", genre: "aaaaAAAA", authorId: "1212213") {
        name
        genre
    }
}

```