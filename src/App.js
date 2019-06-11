import React from 'react';
import Header from './Header/Header';
import ResultsList from './ResultsList/ResultsList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchTerm: 'harry potter',
            userFilter: 'book'
        }
    }

    setSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        }, () => {this.apiCall(this.state.searchTerm)});
    }

    setFilter = (filterBy) => {
        this.setState({
            userFilter: filterBy
        });
    }

    apiCall = (searchTerm) => {
        const key = 'AIzaSyB3CfjbP0Lh9_rBpCKXUqxXbNdq2_NMvfk';
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('There was an error');
                }
                return response;
            }) 
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const bookData = data.items.map(book => {
                    const authors = book.volumeInfo.authors.map(author => {
                        return author
                    });
                    const price = book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 'n/a';
                    return {
                        title: book.volumeInfo.title,
                        description: book.volumeInfo.description,
                        author: authors,
                        price: price,
                        image: book.volumeInfo.imageLinks.thumbnail,
                        printType: book.volumeInfo.printType
                    }
                });
                this.setState({
                    books: bookData
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="App">
                <Header 
                    setFilter={filterBy => this.setFilter(filterBy)} 
                    setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)} />
                <ResultsList books={this.state.books} filter={this.state.userFilter} />
            </div>
        );
    }
}

export default App;
