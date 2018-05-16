import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from "moment";

import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";
import EventModal from "./EventModal";
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap'
import { Input } from "./Input";

import API from "../../utils/eventAPI";
import "./Events.css";

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
            startYear: "",
            startMonth: "",
            startDay: "",
            startDate: "",
            startTime: "",
            endYear: "",
            endMonth: "",
            endDay: "",
            endDate: "",
            endTime: "",
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

    searchDb = () => {
        axios.get("/api/events/user/" + this.state.user._id)
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    res.data[i].start = new Date(res.data[i].start)
                    res.data[i].end = new Date(res.data[i].end)
                }
                this.setState({ events: res.data });
            })
            .catch(err => console.log(err));
    };

    updateModal = (id) => {
        API.getEvent(id)
            .then(res => {
                console.log(res.data)
                var makeStart = res.data.start.split(" ");
                var makeEnd = res.data.end.split(" ");
                var makeStartDate = makeStart[0].split("-");
                var makeEndDate = makeEnd[0].split("-");
                console.log(makeStartDate)
                this.setState({
                    title: res.data.title,
                    description: res.data.description,
                    startYear: makeStartDate[0],
                    startMonth: makeStartDate[1],
                    startDay: makeStartDate[2],
                    endYear: makeEndDate[0],
                    endMonth: makeEndDate[1],
                    endDay: makeEndDate[2],
                    startTime: makeStart[1],
                    endTime: makeEnd[1],
                    id: res.data._id
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
            start: `${this.state.startYear}-${this.state.startMonth}-${this.state.startDay} ${this.state.startTime}`,
            end: `${this.state.endYear}-${this.state.endMonth}-${this.state.endDay} ${this.state.endTime}`,
            description: this.state.description
        }
        console.log(id, updatedEvent)
        API.updateEvent(id, updatedEvent)
            .then(console.log("success update"))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Container className="calendarContainer">
                <BigCalendar
                    events={this.state.events}
                    popupevents={this.state.events}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(new Date().setHours(new Date().getHours() - 3))}
                    onSelectEvent={event => this.updateModal(event._id)}
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
                        <p>Starts at: {`${this.state.startYear}-${this.state.startMonth}-${this.state.startDay} ${this.state.startTime}`}</p>
                        <p>Ends at: {`${this.state.endYear}-${this.state.endMonth}-${this.state.endDay} ${this.state.endTime}`}</p>
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
                                                    value={this.state.startDay}
                                                    onChange={this.handleInputChange}
                                                    name="startDay"
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
                                                    value={this.state.endDay}
                                                    onChange={this.handleInputChange}
                                                    name="endDay"
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
                                <UpdateBtn onClick={() => this.editEvent(this.state.id)} />{' '}
                                <Button color="secondary" onClick={this.toggleAll}>Nevermind</Button>
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="confirmBtn" onClick={this.toggle}>Okay</Button>{' '}
                        <Button color="info" onClick={this.toggleNested}>Edit</Button>{' '}
                        <DeleteBtn onClick={() => this.deleteEvent(this.state.id)} />
                    </ModalFooter>
                </Modal>

            </Container>
        )
    }
};

export default Basic