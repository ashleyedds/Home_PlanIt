import React, { Component } from 'react';

import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';

import Basic from "./components/Basic/basic";
import ModalExample from "./components/Modal";


class App extends Component {

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
