import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from "./BookDetails";

/*
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
*/

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks() {
        var data = this.props.data;
        if (data.loading) {
            return(
                <div>Loading books...</div>
            )
        } else {
            return data.books.map(book => {
                return (
                    <li key={ book.id } onClick={ e => this.setState({ selected: book.id }) }>{ book.name }</li>
                )
            })
        }
    }

    render() {
        // console.log(this.props)   // Inside the component, we have access to all data from GraphQL query

        return (
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
                <BookDetails bookId={ this.state.selected } />
            </div>
        );
    }
}
 
export default graphql(getBooksQuery)(BookList);   // Bind GraphQL query into components' props