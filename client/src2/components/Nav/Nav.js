import React from 'react';
import {} from 'react-dom';

import styled from 'styled-components';
import { Link } from "react-router-dom";
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {ic_event_note} from 'react-icons-kit/md/ic_event_note'
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { spoonKnife } from 'react-icons-kit/icomoon/'

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const BaseContainer = props =>
    <div
        style={{
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


const BasicSideNav = () =>
    <SideNav highlightBgColor="#00bcd4" defaultSelected="events">
        <Title> Home Planit </Title>
        <Nav id="events">
            <NavIcon><Icon20 icon={ic_event_note} /></NavIcon>
            <NavText> Events </NavText>
        </Nav>
        <Nav id="lists">
            <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
            <NavText> Lists </NavText>
        </Nav>
        <Nav id="recipes">
            <NavIcon><Icon20 icon={spoonKnife} /></NavIcon>
            <NavText> Recipes </NavText>
        </Nav>
        <Nav id="members">
            <NavIcon><Icon20 icon={ic_people} /></NavIcon>
            <NavText> Members </NavText>
        </Nav>
    </SideNav>;

class X extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex'}}>
                <BaseContainer style={{ background: '#2c3e50', color: '#FFF' }}>
                    <BasicSideNav />
                </BaseContainer>
            </div>
        );
    }
}


export default X;