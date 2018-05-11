import React from 'react';
import API from "../../utils/eventAPI";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap';
import {Input} from "./Input";
import "./Modal.css";


class EventModal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        modal: false,
        title: "",
        // allDay: false,
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        description: ""
    };

    this.toggle = this.toggle.bind(this);
    }

    toggle() {
    this.setState({
        modal: !this.state.modal
    });
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
        <div>
        <Button color="danger" onClick={this.toggle}>Add Event</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Add an Event</ModalHeader>
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
            <Button color="primary" onClick={this.handleFormSubmit}>Add it!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }
}

export default EventModal;