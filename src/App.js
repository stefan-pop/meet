import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import './App.css';
import './nprogress.css';
import { extractLocations, getEvents } from './api';


class App extends Component {
	state = {
		events: [],
		locations: [],
		displayedEvents: 32,
		defaultLocation : 'all'
	}

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events: events.slice(0, this.state.displayedEvents),
					locations: extractLocations(events)
				});
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEvents = (location, eventCount) => {
		getEvents().then((events) => {
			const locationEvents = (location === 'all') ? events : 
			events.filter((event) => event.location === location);
			if (this.mounted) {
				this.setState({ 
					events: locationEvents.slice(0, eventCount),
					defaultLocation: location
				});
			}
		});
	}

	updateEventsLength(inputValue) {
		this.setState({
			displayedEvents: inputValue
		});
		const { defaultLocation } = this.state
		this.updateEvents(defaultLocation, inputValue);
	}
	
	render() {
		return (
			<div className="App">
				<CitySearch
					locations={this.state.locations} 
					updateEvents={this.updateEvents} 
				/>

				<NumberOfEvents updateEventsLength={(value) => this.updateEventsLength(value)} />

				<EventList events={this.state.events} />
				<button onClick={() => this.updateEventsLength} >Show</button>
			</div>
		);
	}
}

export default App;
