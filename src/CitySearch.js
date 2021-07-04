import React, { Component } from 'react';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
            query: value,
            suggestions
        });

        if(value.length === 0) {
            this.setState({
                showSuggestions: undefined
            })
        }else {
            this.setState({
                showSuggestions: true
            })
        }
    }

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false
        });
        this.props.updateEvents(suggestion);
    }

    render() {
        return (
            <div className="CitySearch">
                <h1>Meet App</h1>
                <h3>Choose your nearest city</h3>
                <div className="suggestion-wrapper">
                    <input 
                        type="text"
                        className="city"
                        value={this.state.query}
                        onChange={this.handleInputChanged}
                        onFocus={() => {this.setState({ showSuggestions: true })}}
                    />
                    <ul className="suggestions" style={this.state.showSuggestions ? {} : {display: 'none'}}>
                        {this.state.suggestions.map((suggestion) => (
                            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
                        ))}
                        <li onClick={() => this.handleItemClicked("all")}>
                            <b>See all cities</b>
                        </li>
                    </ul>
                </div>
            </div>
        );
  }
}

export default CitySearch;