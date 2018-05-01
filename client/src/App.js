import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    events: []
  }
    
  componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(events => this.setState({ events: events}));
    } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Events</h1>
          {this.state.events.map(event =>
            <div key={event.id}>{event.title} </div>
          )}
      </div>
    );
  }
}

export default App;
