import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSearch: ''
        }
    }

    userSearchChange = (userSearch) => {
        this.setState({
            userSearch: userSearch
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setSearchTerm(this.state.userSearch);
    }

    render() {
        return (
            <div className="SearchBar">
                <label htmlFor="search-bar"></label>
                <input
                    type="text"
                    name="search-bar"
                    id="search-bar"
                    value={this.state.userSearch}
                    onChange={e => this.userSearchChange(e.target.value)} />
                <input className="search-btn" type="submit" value="Search" onClick={e => this.handleSubmit(e)} />
            </div>
        )
    }
}

export default SearchBar;