import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import './App.css';
import './nprogress.css';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';


class App extends Component {
	state = {
		events: [],
		locations: [],
		displayedEvents: 32,
		defaultLocation : 'all',
		warningText: '',
		showWelcomeScreen: undefined
	}

	async componentDidMount() {
		this.mounted = true;
		const accessToken = localStorage.getItem('access_token');
		const isTokenValid = (await checkToken(accessToken)).error ? false : true;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get("code");

		this.setState({ showWelcomeScreen: !(code || isTokenValid) });


		//this keeps the alert displayed if the user is offline and refreshes the page.
		if (!navigator.onLine) {
			this.setState({
				warningText: 'You are currently offline. Some features of the app might be limited!'
			})
		}

		window.addEventListener('offline', () => {
			this.setState({
				warningText: 'You are currently offline. Some features of the app might be limited!'
			})
		});

		window.addEventListener('online', () => {
			this.setState({
				warningText: 'You are back online!'
			})

			setTimeout(() => {
				this.setState({
					warningText: ''
				})
			}, 3000)
		});

		if ((code || isTokenValid) && this.mounted) {
			getEvents().then((events) => {
				if (this.mounted) {
					this.setState({
						events: events.slice(0, this.state.displayedEvents),
						locations: extractLocations(events)
					});
				}
			});
		}
	}

	componentWillUnmount() {
		this.mounted = false;

		window.removeEventListener('offline', () => {
			this.setState({
				warningText: 'You are currently offline. Some features of the app might be limited!'
			})
		});

		window.removeEventListener('online', () => {
			this.setState({
				warningText: 'You are back online!'
			})

			setTimeout(() => {
				this.setState({
					warningText: ''
				})
			}, 3000)
		});
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

		if (this.state.showWelcomeScreen === undefined) return <div className="App" />

		return (
			<div className="App">
				<WarningAlert text={this.state.warningText} />
				<CitySearch
					locations={this.state.locations} 
					updateEvents={this.updateEvents} 
				/>

				<NumberOfEvents updateEventsLength={(value) => this.updateEventsLength(value)} />

				<EventList events={this.state.events} />

				<WelcomeScreen 
					showWelcomeScreen={this.state.showWelcomeScreen}
					getAccessToken={() => { getAccessToken() }} 
				/>
			</div>
		);
	}
}

export default App;
