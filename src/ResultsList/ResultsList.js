import React from 'react';
import './ResultsList.css';
import ResultsListItem from '../ResultsListItem/ResultsListItem';

class ResultsList extends React.Component {
    render () {
        let resultListItems = this.props.books.map((book , i) => {
            return (
                <ResultsListItem key={i} book={book} />
            )
        });
        console.log(resultListItems);
        return (
            <div className="ResultsList">
                {resultListItems.filter(book => book.props.book.printType.toLowerCase() === this.props.filter.toLowerCase())}
            </div>
        )
    }
}

export default ResultsList;