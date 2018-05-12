import React from 'react';
import BigCalendar from 'react-big-calendar';
import EventModal from "./Modal";
import moment from "moment";
import API from "../../utils/eventAPI";
import "./Events.css";
import { Container } from 'reactstrap'
import styled, { css } from 'styled-components';

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Basic extends React.Component {
    state = {
        events: []
    };

    componentDidMount() {

        this.searchDb();
        
    }

    searchDb = () => {
        API.getEvents()
        .then(res => {
            for(let i = 0; i < res.data.length; i++){
                res.data[i].start = new Date(res.data[i].start)
                res.data[i].end = new Date(res.data[i].end)
            }
            this.setState({ events: res.data });
        })
        .catch(err => console.log(err));
    };

    render() {

    return (
        
        <Container>
        <BigCalendar
        events={this.state.events}
        popup events={this.state.events}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(new Date().setHours(new Date().getHours() - 3))}
        onSelectEvent={event => alert(`${event.title}:
        ${event.desc}`)}
            onSelectSlot={slotInfo =>
            alert(
                `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
            }
        />
        <EventModal />
        </Container>
    )
    }
};

export default Basic