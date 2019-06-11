import React from 'react';
import './Form.css';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';

class Form extends React.Component {
    render () {
        return (
            <div className="Form">
                <form>
                    <SearchBar setSearchTerm={this.props.setSearchTerm} />
                    <div className="filters">
                        <Filter 
                            filter="Print Type" 
                            options={['book', 'magazine']}
                            setFilter={this.props.setFilter} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;