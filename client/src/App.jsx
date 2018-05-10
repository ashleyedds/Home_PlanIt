import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Home from './components/Home'
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle
} from 'reactstrap';
import styled, { css } from 'styled-components';


const DisplayLinks = props => {
	const NavLink = styled.a`
		border-radius: 3px;
		padding: 0.5em 1em;
		margin: 0 1em;
		background-color: #2c3e50;
		color: white;
		border: 2px solid #2c3e50;
	`
	if (props.loggedIn) {
		return (
			<Nav>
				<NavItem>
					<NavLink href="/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#" onClick={props._logout}>Logout </NavLink>
				</NavItem>
			</Nav>
		)
	} else {
		return (
			<Nav>
				<NavItem>
					<NavLink href="/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/login">Login </NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/signup">Signup</NavLink>
				</NavItem>
			</Nav>
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
			})
	}



	render() {
		const CardBody = styled.a`
			background-color: #eceeef;
		`

		return (
			<Container>
				<Jumbotron>
					<h1 className="display-3">Member Hub</h1>
					<p className="lead">Manage your household members, or add to the fun!</p>
					<p className="lead">
						<Button color="primary">Add a Member</Button>
					</p>
					<hr className="my-2" />
				</Jumbotron>
				<div>
					<Card>
						<CardBody>
							<Row>
								<Col>
									<Header user={this.state.user} />
								</Col>
							</Row>
							<Row>
								<Col lg={{ offset: 4 }}>
									<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
								</Col>
							</Row>
							<Row>
								<Col>
									<Route exact path="/" render={() => <Home user={this.state.user} />} />
									<Route
										exact
										path="/login"
										render={() =>
											<LoginForm
												_login={this._login}
											/>}
									/>
									<Route exact path="/signup" component={SignupForm} />
								</Col>
							</Row>
						</CardBody>
					</Card>
				</div>

			</Container>

		)
	}
}

export default App
