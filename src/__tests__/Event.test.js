import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe( '<Event /> component', () => {
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event}/> );
    });

    test('renders the component', () => {
        expect(EventWrapper).toBeDefined();
    });

    test('renders the summary in an h3 tag', () => {
        const summary = EventWrapper.find('h3.summary');

        expect(summary).toHaveLength(1);
        expect(summary.text()).toBe(event.summary);
    });

    test('renders the start details in a paragraph', () => {
        const eventStart = EventWrapper.find('p.event-start');

        expect(eventStart).toHaveLength(1);
        expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
    });

    test('renders the location details in a paragraph', () => {
        const eventLocation = EventWrapper.find('p.event-location');
    
        expect(eventLocation).toHaveLength(1);
        expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
      });
    
    test('renders the "show details" button when collapsed', () => {
        const detailsButton = EventWrapper.find('button.details-btn');

        expect(detailsButton).toHaveLength(1);
        expect(detailsButton.text()).toBe('show details');
    });

})