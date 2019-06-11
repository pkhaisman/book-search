import React from 'react';
import './Filter.css';

class Filter extends React.Component {
    render() {
        const choices = this.props.options.map((choice, i) => {
            return <option value={choice} key={i}>{choice}</option>                            
        });
        return (
            <div className="Filter">
                <label>
                    Filter by {this.props.filter}:
                    <select onChange={e => this.props.setFilter(e.target.value)} className="options">
                        {choices}
                    </select>
                </label>
            </div>
        )
    }
}

export default Filter;