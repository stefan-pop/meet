import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let numberOfEventsWrapper;

    beforeAll(() => {
        numberOfEventsWrapper = shallow( <NumberOfEvents updateEventsLength={() => {/* prop that will slice the events list in the uppermost component(App.js) to the input value */}} />)
    });

    test('input is rendered', () => {
        expect(numberOfEventsWrapper.find('#events-number-input')).toHaveLength(1);
    });

    test('update state with the input value', () => {
        numberOfEventsWrapper.find('#events-number-input').simulate('change', { target: { value: 1}});
        expect(numberOfEventsWrapper.state('displayedEvents')).toBe(1);
    });

})