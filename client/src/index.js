import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Recipe from "./components/Recipe/SearchResultContainer"
import X from "./components/Nav/Nav";
import './index.css';
import Basic from "./pages/Events";
import Todo from "./components/List/TodoContainer";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
	<div className="App" style={{ display: 'flex', alignItems: 'stretch' }}>
		<X />
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={App} />
						<Route exact path="/recipes" component={Recipe} />
						<Route exact path="/events" component={Basic} />
						<Route exact path="/lists" component={Todo} />
          				<Route component={App} />
					</Switch>
				</div>
			</Router>
		
	</div>,
	document.getElementById('root')
)
