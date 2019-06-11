import React from 'react';
import './Header.css';
import Form from '../Form/Form';

class Header extends React.Component {
    render () {
        return (
            <header className="Header">
                <h1>Book Search</h1>
                <Form 
                    setSearchTerm={this.props.setSearchTerm}
                    setFilter={this.props.setFilter} />
            </header>
        )
    }
}

export default Header;