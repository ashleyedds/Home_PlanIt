import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';

import Basic from "./components/Basic/basic";
import ModalExample from "./components/Modal";
import Recipe from "./components/Recipe/SearchResultContainer"
import Todo from "./components/List/TodoContainer";
import X from "./components/Nav/Nav";


const App = () => (

  <div className="App" style={{display: 'flex',alignItems: 'stretch'}}>
    <X />
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Basic} />
          <Route exact path="/events" component={Basic} />
          <Route exact path="/recipes" component={Recipe} />
          <Route exact path="/lists" component={Todo} />
          <Route component={Basic} />
        </Switch>
      </div>
    </Router>
  </div>

)


export default App;
