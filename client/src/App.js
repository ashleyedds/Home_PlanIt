import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';

import Basic from "./components/Basic/basic";
import ModalExample from "./components/Modal";
import Recipe from "./components/Recipe/SearchResultContainer"


const App = () => (

  <Router>
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Basic} />
        <Route exact path="/events" component={Basic} />
        <Route exact path="/recipes" component={Recipe} />
        <Route component={Basic} />
      </Switch>
    </div>
  </Router>

)

// state = {
//   events: []
// }

// componentDidMount() {
//     fetch('/events')
//       .then(res => res.json())
//       .then(events => this.setState({ events: events}));
//   } 

// render() {
//   return (
//     <div className="App">
//       <Basic />
//       <ModalExample />
//     </div>
//   );
// }


export default App;
