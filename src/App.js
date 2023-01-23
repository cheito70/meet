//import { render } from '@testing-library/react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

class App extends Component {
  state= {
    events: [],
    locations: [],
  }

  render() {
  return (
    <div className="App">
       <CitySearch />
       <EventList />
    </div>
    );
  }
}

export default App;
