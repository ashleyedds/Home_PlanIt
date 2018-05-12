import React from 'react';
import BigCalendar from 'react-big-calendar';
import EventModal from "./EventModal";
import ModalExample from "./EditEvent"
import moment from "moment";
import API from "../../utils/eventAPI";
import "./Events.css";
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styled, { css } from 'styled-components';

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            events: [],
            title: "",
            description: "",
            starts: "",
            ends: ""
        };
        this.toggle = this.toggle.bind(this);
        }

        toggle() {
            this.setState({
                modal: !this.state.modal
            });
            }

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

    updateModal = (id) => {
        API.getEvent(id)
        .then(res => this.setState({
            title: res.data.title,
            description: res.data.description,
            starts: res.data.start,
            ends: res.data.end
        }))
        .then(this.toggle())
    }

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
        onSelectEvent= {event => this.updateModal(event._id)}
        onSelectSlot={slotInfo =>
            alert(
                `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
            }
        />
        <EventModal />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
            <ModalBody>
                <h3>{this.state.description}</h3>
                <p>Starts at: {this.state.starts}</p>
                <p>Ends at: {this.state.ends}</p>
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={this.toggle}>Okay</Button>{' '}
            <Button color="info" onClick={this.toggle}>Edit Event</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Delete Event</Button>
            </ModalFooter>
        </Modal>

        </Container>
    )
    }
};

export default Basic