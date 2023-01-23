import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = { num: 50 }
  
    componentDidMount() {
      this.setState({ num: this.props.noe || 50 });
    }
  
    changeNUM(value) {
      this.setState({ num: value })
    }
  
    render() {
      const { num } = this.state;
      return (
      <div className="NumberOfEvents">
          <h3>Number of Events:</h3>
          <input
            className="num"
            type="number"
            value={num}
            onChange={event => {
              this.changeNUM(event.target.value);
            }}
          >
          </input>
      </div>
      )
    }
  
  }
  
  export default NumberOfEvents;
  