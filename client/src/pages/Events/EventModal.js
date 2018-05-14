import React from 'react';
import API from "../../utils/eventAPI";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap';
import AddBtn from "../../components/AddBtn";
import {Input} from "./Input";
import "./EventModal.css";
import axios from "axios"


class EventModal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        modal: false,
        title: "",
        // allDay: false,
        startYear: "",
        startMonth: "",
        startDate: "",
        startTime: "",
        endYear: "",
        endMonth: "",
        endDate: "",
        endTime: "",
        description: "",
        user: null
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
            } 
        })       
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("click")
        API.saveEvent({
            title: this.state.title,
            start: `${this.state.startYear}-${this.state.startMonth}-${this.state.startDate} ${this.state.startTime}`,
            end: `${this.state.endYear}-${this.state.endMonth}-${this.state.endDate} ${this.state.endTime}`,
            description: this.state.description,
            user: this.state.user._id
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
        <Button className="addBtn" onClick={this.toggle}>Add Event</Button>
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
                <Label for="description">Event Description </Label>
                <Input 
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description" 
                    placeholder="Tell me more." />
            </FormGroup> 
            <h3>Event Start</h3>
            <div className="row">
            <div className="col-sm">
            <FormGroup>
                <Label for="startYear">Year </Label>
                    <Input 
                        value={this.state.startYear}
                        onChange={this.handleInputChange}
                        name="startYear" 
                        placeholder="YYYY" />
            </FormGroup>
            </div>
            <div className="col-sm">
            <FormGroup>
            <Label for="startMonth">Month </Label>
                <Input 
                    value={this.state.startMonth}
                    onChange={this.handleInputChange}
                    name="startMonth" 
                    placeholder="MM" />
            </FormGroup>
            </div>
            </div>
            <div className="row">
            <div className="col-sm">
            <FormGroup>
            <Label for="startDate">Date </Label>
                <Input 
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    name="startDate" 
                    placeholder="DD" />
            </FormGroup>
            </div>
            <div className="col-sm">
            <FormGroup>
            <Label for="startTime">Time </Label>
                <Input 
                    value={this.state.startTime}
                    onChange={this.handleInputChange}
                    name="startTime" 
                    placeholder="HH:MM (military time)" />
            </FormGroup>
            </div>
            </div>
            <h3>Event End</h3>
            <div className="row">
            <div className="col-sm">
            <FormGroup>
                <Label for="endYear">Year </Label>
                    <Input 
                        value={this.state.endYear}
                        onChange={this.handleInputChange}
                        name="endYear" 
                        placeholder="YYYY" />
            </FormGroup>
            </div>
            <div className="col-sm">
            <FormGroup>
            <Label for="endMonth">Month </Label>
                <Input 
                    value={this.state.endMonth}
                    onChange={this.handleInputChange}
                    name="endMonth" 
                    placeholder="MM" />
            </FormGroup>
            </div>
            </div>
            <div className="row">
            <div className="col-sm">
            <FormGroup>
            <Label for="endDate">Date </Label>
                <Input 
                    value={this.state.endDate}
                    onChange={this.handleInputChange}
                    name="endDate" 
                    placeholder="DD" />
            </FormGroup>
            </div>
            <div className="col-sm">
            <FormGroup>
            <Label for="endTime">Time </Label>
                <Input 
                    value={this.state.endTime}
                    onChange={this.handleInputChange}
                    name="endTime" 
                    placeholder="HH:MM (military time)" />
            </FormGroup>
            </div>
            </div>
            </Form>
            </ModalBody>
            <ModalFooter>
            <AddBtn onClick={this.handleFormSubmit} />{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }
}

export default EventModal