import React, { Component } from 'react';

import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';

import Basic from "./components/Basic/basic";
import ModalExample from "./components/Modal";


class App extends Component {

  state = {
    events: []
  }
    
  componentDidMount() {
      fetch('/events')
        .then(res => res.json())
        .then(events => this.setState({ events: events}));
    } 

  render() {
    return (
      <div className="App">
        <Basic />
        <ModalExample />
      </div>
    );
  }
}

export default App;
