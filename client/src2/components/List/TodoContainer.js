import React, { Component } from "react";
import TodoList from "./TodoList";
import "./TodoContainer.css"
import { Container, Row, Col } from 'reactstrap';

class TodoContainer extends Component {
  
  render() {
    return (
      <Container>
        <Row>
          <Col>Todo List<TodoList /></Col>
          <Col>Grocery List<TodoList /></Col>
          <Col>Joe's List<TodoList /></Col>
          <Col>Matt's List<TodoList /></Col>
          <Col>Ashley's List<TodoList /></Col>
        </Row>
      </Container>
    );
  }
}

export default TodoContainer;
