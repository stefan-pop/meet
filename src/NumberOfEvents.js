import React, {Component} from 'react';

class NumberOfEvents extends Component {

    state = {
        displayedEvents: 32
    }

    handleInput = (e) => {
        
        this.setState({
            displayedEvents: e.target.value
        })
        this.props.updateEventsLength(e.target.value);    
    }

    render() {
        return(
            <div className='events-number'>
                <label htmlFor='events-number-input'>Chose the number of events you want to see</label>
                <input type='number' id='events-number-input' value={this.state.displayedEvents} onChange={(e) => this.handleInput(e)}/> 
            </div>
        )
    }
}

export default NumberOfEvents;