import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let eventWrapper;
    beforeAll(() => {
        eventWrapper = shallow(<Event event={mockData[0]} />)
    });

    // Title of the collapsed event
    test('event title render', () => {
        expect(eventWrapper.find('.event-title')).toHaveLength(1);
    });

    // Location and time within the event-time div
    test('event time and location render', () => {
        expect(eventWrapper.find('.event-time span')).toHaveLength(2);
    });

    test('show details button is rendered', () => {
        expect(eventWrapper.find('.btn-wrapper button')).toHaveLength(1);
    });

    // Toggle state from false to true
    test('the button toggles state from f to t', () => {
        eventWrapper.find('.btn-wrapper button').simulate('click');
        expect(eventWrapper.state('showMore')).toBe(true);
    });

    // Toggle state from true to false
    test('show more button toggles state from t to f', () => {
        eventWrapper.find('.btn-wrapper button').simulate('click');
        expect(eventWrapper.state('showMore')).toBe(false);
    });

    //Show details
    test('details are shown on click', () => {
        eventWrapper.find('.btn-wrapper button').simulate('click');
        expect(eventWrapper.find('.show-more')).toHaveLength(1);    
    });

    // Hide details
    test('details are hidden on click', () => {
        eventWrapper.find('.btn-wrapper button').simulate('click');
        expect(eventWrapper.find('.show-more')).toHaveLength(0);
    });
    
    // Check if at least one element (event description) is rendered correctly within the show-more div.
    test('hidden details are rendered properly', () => {
        let description = mockData[0].description;
        eventWrapper.find('.btn-wrapper button').simulate('click');
        expect(eventWrapper.find('.event-description').text()).toBe(description);
    });

    // Button text
    test('Button text', () => {
        eventWrapper.setState({showMore: true});
        expect(eventWrapper.find('.btn-wrapper button').text()).toBe('Show less');
    });
})