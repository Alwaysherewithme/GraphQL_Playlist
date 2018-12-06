import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
/*
// Construct the GraphQL query, then bind into components
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
*/

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
    }

    displayAuthors() {
        // var data = this.props.data;
        var data = this.props.getAuthorsQuery;
        if (data.loading) {
            return (
                <option disabled>Loading Authors...</option>
            )
        } else {
            return data.authors.map(author => {
                return (
                    <option key={ author.id } value={ author.id }>{ author.name }</option>
                )
            })
        }
    }

    submitForm(e) {
        e.preventDefault();
        // console.log(this.state);
        this.props['addBookMutation']({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [
                { query: getBooksQuery }
            ]
        });

    }

    render() {
        // console.log(this.props)   // Inside the component, we have access to all data from GraphQL query

        return (
            <div>
                <form id="add-book" onSubmit={ this.submitForm.bind(this) }>
                    <div className="field">
                        <label>Book name:</label>
                        <input type="text" onChange={ e => this.setState({ name: e.target.value }) } />
                    </div>
                    <div className="field">
                        <label>Genre:</label>
                        <input type="text" onChange={ e => this.setState({ genre: e.target.value }) }/>
                    </div>
                    <div className="field">
                        <label>Author:</label>
                        <select onChange={ e => this.setState({ authorId: e.target.value }) }>
                            <option>Select author</option>
                            { this.displayAuthors() }
                        </select>
                    </div>
                    <button>+</button>
                </form>
            </div>
        );
    }
}
 
// export default graphql(getAuthorsQuery)(AddBook);   // Bind GraphQL query into components' props
export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);   // Compose several GraphQL queries into component