import React from 'react';
import { } from 'react-dom';

import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Nav, NavIcon, NavText } from 'react-sidenav';

import logo from "./logo.png";
import "./Nav.css";

import { withRR4 } from 'react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SvgIcon from 'react-icons-kit';
import { ic_event_note } from 'react-icons-kit/md/ic_event_note'
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { spoonKnife } from 'react-icons-kit/icomoon/';

import Recipe from "../Recipe/SearchResultContainer";
import Basic from "../../pages/Events";
import Todo from "../List/TodoContainer";

import { Redirect } from 'react-router';

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
		border-radius: 3px;
		padding: 0.5em 1em;
		margin: 0 2em;
		background-color: #2c3e50;
		color: white;
		border: 2px solid #2c3e50;
`;


const SideNav = withRR4();

export const BasicSideNav = () => (
    <Router>
        <SideNav highlightBgColor="#00bcd4" defaultSelected="events">
            <img src={logo} />
            <Title> Home Planit </Title>
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
                <NavText><NavLink href="/members">Members</NavLink></NavText>
            </Nav>
        </SideNav>
    </Router>
);

class X extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <BaseContainer style={{ background: '#2c3e50', color: '#FFF' }}>
                    <BasicSideNav />
                </BaseContainer>
            </div>
        );
    }
}

export default X;