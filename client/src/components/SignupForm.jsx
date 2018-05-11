import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./SignupForm.css";
import { Container, Row, Col } from 'reactstrap';

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<Container>
				<Row>
					<Col lg={{ size: 5, offset: 3 }}>
							<input
								type="text"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<input
								type="password"
								name="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Confirm Password"
								value={this.state.confirmPassword}
								onChange={this.handleChange}
							/>
					</Col>
				</Row>
				<Row>
					<Col lg={{ size: 1, offset: 5}}>
						<button onClick={this.handleSubmit}>Create Account</button>
					</Col>
				</Row>
			</Container>



					)
				}
			}
			
			export default SignupForm
