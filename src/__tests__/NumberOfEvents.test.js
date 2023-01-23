import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(
            <NumberOfEvents updateNumberOfEvents={() => {}} />
        );
    });

    test("renders the component", () => {
        expect(NumberOfEventsWrapper).toBeDefined();
      });
    
   test("default value of the input is 50", () => {
        expect(NumberOfEventsWrapper.find("input.num").prop("type")).toBe("number");
        expect(NumberOfEventsWrapper.state("num")).toBe(50);
    });

    test("input has value given in the num prop", () => {
        const NumberOfEventsWrapperWithProp = shallow(
            <NumberOfEvents num={20} updateNumberOfEvents={() => {}} />
        );
        expect(NumberOfEventsWrapperWithProp.state("num")).toBe(20);
    });

    test("input changes on user input", () => {
        expect(NumberOfEventsWrapper.state("num")).toBe(50);
        NumberOfEventsWrapper.find("input.num").simulate("change", {
            target: { value: 15 },
        });
        expect(NumberOfEventsWrapper.state("num")).toBe(15);
    });
});

