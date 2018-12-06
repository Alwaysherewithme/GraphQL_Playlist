import { gql } from 'apollo-boost';


// Construct the GraphQL query, then bind into components
const getBooksQuery = gql`
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
`

const getAuthorsQuery = gql`
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
`
// Query Variables
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            id
            name
            genre
        }
    }
`

const getBookQuery = gql`
    query($id: ID) {
        book (id: $id) {
            id
            name
            genre
            author {
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
    }
`

export {
    getAuthorsQuery,
    getBooksQuery,
    addBookMutation,
    getBookQuery
}