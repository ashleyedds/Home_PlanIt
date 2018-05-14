import React from 'react';
import BigCalendar from 'react-big-calendar';
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";
import EventModal from "./EventModal";
import ModalExample from "./EditEvent"
import moment from "moment";
import API from "../../utils/eventAPI";
import "./Events.css";
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap'
import {Input} from "./Input";
import styled, { css } from 'styled-components';
import axios from "axios";

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false,
            events: [],
            title: "",
            description: "",
            starts: "",
            startDate: "",
            startTime: "",
            endDate: "",
            endTime: "",
            ends: "",
            id: "",
            user: null
        };
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        }

        toggle() {
            this.setState({
                modal: !this.state.modal
            });
            }

        toggleNested() {
            this.setState({
                nestedModal: !this.state.nestedModal,
                closeAll: false
            });
            }
            
            toggleAll() {
            this.setState({
                nestedModal: !this.state.nestedModal,
                closeAll: true
            });
            }

    componentDidMount() {
        axios.get('/auth/user').then(response => {
            console.log(response.data.user)
            if (!!response.data.user) {
              console.log('THERE IS A USER')
              console.log(response.data.user.local.username)
              this.setState({
                user: response.data.user
              })
              console.log(this.state)
              this.searchDb();
            } 
        })       
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveEvent({
            title: this.state.title,
            start: this.state.startDate + " " + this.state.startTime,
            end: this.state.endDate + " " + this.state.endTime,
            description: this.state.description
        })
            .catch(err => console.log(err));
            
    }

    searchDb = () => {
        axios.get("/api/events/" + this.state.user._id)
        .then(res => {
            for(let i = 0; i < res.data.length; i++){
                res.data[i].start = new Date(res.data[i].start)
                res.data[i].end = new Date(res.data[i].end)
            }
            this.setState({ events: res.data });
        })
        .catch(err => console.log(err));
    };

    updateModal = (user) => {
        API.getEvent(user)
        .then(res => 
            {
            console.log(res.data)
            var makeStart = res.data[0].start.split(" ");
            var makeEnd = res.data[0].end.split(" ");
            this.setState({
                title: res.data[0].title,
                description: res.data[0].description,
                starts: res.data[0].start,
                ends: res.data[0].end,
                startDate: makeStart[0],
                startTime: makeStart[1],
                endDate: makeEnd[0],
                endTime: makeEnd[1],
                id: res.data[0]._id
        })
    })
        .then(this.toggle())
    };

    deleteEvent = id => {
        console.log(this.state.id)
        API.deleteEvent(id)
            .then(console.log("success"))
            .catch(err => console.log(err));
        };
    
    editEvent = (id) => {
        var updatedEvent = {
            title: this.state.title,
            start: this.state.startDate + " " + this.state.startTime,
            end: this.state.endDate + " " + this.state.endTime,
            description: this.state.description
        }
        var userId = this.state.user._id    
        API.updateEvent(id, updatedEvent, userId)
        .then(console.log("success update"))
        .catch(err => console.log(err))
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
        onSelectEvent= {event => this.updateModal(event.user)}
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
                <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                <ModalHeader>Edit event</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="title">Event Title</Label>
                        <Input 
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="What are you up to?" />
                    </FormGroup> 
                    <FormGroup>
                        <Label for="description">Event Description (optional)</Label>
                        <Input 
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description" 
                            placeholder="Tell me more." />
                    </FormGroup> 
                    <FormGroup>
                        <Label for="date">Start Date (YYYY-MM-DD)</Label>
                        <Input
                            value={this.state.startDate}
                            onChange={this.handleInputChange} 
                            name="startDate" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="startTime">Start Time</Label>
                        <Input
                            value={this.state.startTime}
                            onChange={this.handleInputChange} 
                            name="startTime" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">End Date (YYYY-MM-DD)</Label>
                        <Input 
                            value={this.state.endDate}
                            onChange={this.handleInputChange}
                            name="endDate" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="endTime">End Time</Label>
                        <Input 
                            value={this.state.endTime}
                            onChange={this.handleInputChange}
                            name="endTime" />
                    </FormGroup>
            </Form>
                </ModalBody>
                <ModalFooter>
                <UpdateBtn onClick={() => this.editEvent(this.state.id)} />{' '}
                    <Button color="secondary" onClick={this.toggleAll}>Nevermind</Button>
                </ModalFooter>
                </Modal>
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={this.toggle}>Okay</Button>{' '}
            <Button color="info" onClick={this.toggleNested}>Edit</Button>{' '}
            <DeleteBtn onClick={() => this.deleteEvent(this.state.id)} />
            </ModalFooter>
        </Modal>

        </Container>
    )
    }
};

export default Basic