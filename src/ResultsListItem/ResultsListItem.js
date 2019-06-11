import React from 'react';
import './ResultsListItem.css';

class ResultsListItem extends React.Component {
    render () {
        const {
            author,
            description,
            title,
            price,
            image
        } = this.props.book
        return (
            <div className="ResultsListItem">
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>Price: {price}</p>
                <p>{description}</p>
                <img src={image} alt="book cover"></img>
            </div>
        )
    }
}

export default ResultsListItem;