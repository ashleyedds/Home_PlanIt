import React from 'react';
import { } from 'react-dom';

import styled from 'styled-components';
import { Nav, NavIcon, NavText } from 'react-sidenav';

import logo from "./logo.png";
import "./Nav.css";
import Hello from "./hello";

import { withRR4 } from 'react-sidenav';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'

import SvgIcon from 'react-icons-kit';
import { ic_event_note } from 'react-icons-kit/md/ic_event_note'
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { spoonKnife } from 'react-icons-kit/icomoon/';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const BaseContainer = props =>
    <div
        style={{
            position: 'fixed',
            left: '0px',
            top: '0px',
            display: 'flex',
            alignItems: 'stretch',
            paddingTop: 25,
            paddingBottom: 25,
            fontFamily: 'Arial',
            minWidth: "250px",
            maxWidth: '250px',
            minHeight: '100vh',
            ...props.style
        }}
    >
        {props.children}
    </div>;

const Title = styled.div`
    padding: 55px;
    padding-top: 20px;
    font-size: 25px;
`;
const NavLink = styled.a`
        width: 10em;
		padding: 0.5em 1em;
        background: transparent;
        color: white;
`;

const SideNav = withRR4();

class X extends React.Component {
    state = {
        user: null,
        guest: "Please sign in"
    }

    componentDidMount() {
        axios.get('/auth/user').then(response => {
            console.log(response.data.user)
            if (!!response.data.user) {
                console.log('THERE IS A USER')
                console.log(response.data.user.local.username)
                this.setState({
                    user: "Welcome " + response.data.user.local.username + "!"
                })
                console.log(this.state)
            }

        })
    }

    checkLogIn(){
        if(this.state.user !== null) {
            return this.state.user
        }
        return  this.state.guest
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <BaseContainer style={{ background: '#2c3e50', color: '#FFF' }}>
                    <Router>
                        <SideNav highlightBgColor="#00bcd4">
                            <img className="logo" src={logo} alt=""/>
                            <Title> Home Planit </Title>
                            <Hello user={this.checkLogIn()} />
                            <Nav id="events">
                                <NavIcon><Icon20 icon={ic_event_note} /></NavIcon>
                                <NavText><NavLink href="/events">Events</NavLink></NavText>
                            </Nav>
                            <Nav id="lists">
                                <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
                                <NavText><NavLink href="/lists">Lists</NavLink></NavText>
                            </Nav>
                            <Nav id="recipes">
                                <NavIcon><Icon20 icon={spoonKnife} /></NavIcon>
                                <NavText><NavLink href="/recipes">Recipes</NavLink></NavText>
                            </Nav>
                            <Nav id="members">
                                <NavIcon><Icon20 icon={ic_people} /></NavIcon>
                                <NavText><NavLink href="/logout">Login/Logout</NavLink></NavText>
                            </Nav>
                        </SideNav>
                    </Router>
                </BaseContainer>
            </div>
        );
    }
}

export default X;
