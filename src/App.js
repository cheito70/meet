//import { render } from '@testing-library/react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state= {
    events: [],
    locations: [],
    numberOfEvents: 50
  };

  render() {
  return (
    <div className="App">
      <h1>Meetup With Friends</h1>
      <h3>Choose a City</h3>
       <CitySearch />
       <NumberOfEvents />
       <EventList events={this.state.events} />
    </div>
    );
  }
}

export default App;
