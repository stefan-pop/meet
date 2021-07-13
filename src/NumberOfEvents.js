import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        displayedEvents: 32,
        errorText: ''
    }

    handleInput = (e) => {
        let value = e.target.value;

        if(value < 1) {
            this.setState({
                displayedEvents: value,
                errorText: 'Please enter a number greater than 0'
            })
            return false;
        }else if (value > 32) {
            this.setState({
                displayedEvents: value,
                errorText: 'Please enter a number not greater than 32'
            })
            return false;
        }else {
            this.setState({
                displayedEvents: value,
                errorText: ''
            })
            this.props.updateEventsLength(value);
        }           
    }

    render() {
        return(
            <div className='events-number'>
                <label htmlFor='events-number-input'>Number of events:</label> <br />
                <input type='number' id='events-number-input' value={this.state.displayedEvents} onChange={(e) => this.handleInput(e)}/> 
                <ErrorAlert text={this.state.errorText}/>
            </div>
        )
    }
}

export default NumberOfEvents;

NumberOfEvents.propTypes = {
    updateEventsLength: PropTypes.func.isRequired
}