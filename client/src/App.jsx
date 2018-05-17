import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'
import logo from "./components/Nav/logo.png";
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import { Row, Col, Nav, NavItem } from 'reactstrap';
import styled from 'styled-components';

const DisplayLinks = props => {
	const NavLink = styled.a`
		border-radius: 3px;
		padding: 0.5em 1em;
		margin: 0 2em;
		background-color: #2c3e50;
		color: white;
		border: 2px solid #2c3e50;
		horizontal-align: center;
	`
	const div = styled.div`
		margin: auto;
		display: block;
		
	`
	if (props.loggedIn) {
		return (
			<div className="navDiv">
				<Nav>
					<NavItem>
						<NavLink className="logout" href="#" onClick={props._logout}>Logout </NavLink>
					</NavItem>
				</Nav>
			</div>

		)
	} else {
		return (
			<div className="navDiv">
				<Nav>
					<NavItem>
						<NavLink className="login" href="/login">Login </NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="signup" href="/signup">Signup</NavLink>
					</NavItem>
				</Nav>
			</div>
		)
	}
	
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
  }
  
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
				console.log(this.state.user)
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
			window.location.reload()
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			window.location.reload()
			})
	}

	render() {
		const Container = styled.div`
			background: transparent;
			width: 50%;
			height: 100%;
			left: 0%;
			top: 10%;
			padding: 1em;
			margin-left: 20em;
		`
		const Jumbotron = styled.div`
			background: transparent;
			
		`

		return (
			<Container className="mainContainer">
				<Jumbotron>
				<img className="logoMain" src={logo} alt=""/>
				<h4 className="welcomeText">Welcome to HomePlanit!</h4>
				<h7 className="welcomeText">All your home organization needs, under one roof</h7>
					<Row className="buttonRow">
						<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
					</Row>
					<Row className="formRow">
						<Col>
							<Route exact path="/" render={() =>
									<LoginForm
										_login={this._login}
									/>}
									 />
							<Route
								exact
								path="/login"
								render={() =>
									<LoginForm
										_login={this._login}
									/>}
							/>
						</Col>
						<Col>
							<Route exact path="/signup" component={SignupForm} />
						</Col>
					</Row>
				</Jumbotron>
			</Container>
		)
	}
}

export default App
