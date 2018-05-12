import React from 'react';
import { } from 'react-dom';

import { Link } from "react-router-dom";
import SvgIcon from 'react-icons-kit';
import { ic_event_note } from 'react-icons-kit/md/ic_event_note'
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { spoonKnife } from 'react-icons-kit/icomoon/';

import styled from 'styled-components';

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

const BasicSideNav = () =>
    <SideNav highlightBgColor="#00bcd4" defaultSelected="events">
        <Title> Home Planit </Title>
        <Nav id="events">
            <NavIcon><Icon20 icon={ic_event_note} /></NavIcon>
            <NavLink href="/events"> Events </NavLink>
        </Nav>
        <Nav id="lists">
            <Link to={"/lists"}>
                <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
                <NavLink href="/lists"> Lists </NavLink>
            </Link>
        </Nav>
        <Nav id="recipes">
            <NavIcon><Icon20 icon={spoonKnife} /></NavIcon>
            <NavLink href="/recipes"> Recipes </NavLink>
        </Nav>
        <Nav id="members">
            <NavIcon><Icon20 icon={ic_people} /></NavIcon>
            <NavLink href="/members"> Members </NavLink>
        </Nav>
    </SideNav>
    ;

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