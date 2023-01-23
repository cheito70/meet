//import { render } from '@testing-library/react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './EventList';

class App extends Component {
  state= {
    events: [],
    locations: [],
    numberOfEvents: 50
  };

  render() {
  return (
    <div className="App">
       <CitySearch />
       <NumberOfEvents />
       <EventList />
    </div>
    );
  }
}

export default App;
