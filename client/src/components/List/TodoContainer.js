import React, { Component } from "react";
import TodoList from "./TodoList";
import "./TodoContainer.css"
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardColumns
} from 'reactstrap';
import styled, { css } from 'styled-components';



    
class TodoContainer extends Component {

  
  render() {
    
    const CardBody = styled.div`
			background-color: #eceeef;
    `

    return (
      

      <Container>
        <div>
          <Jumbotron>
            <h1 className="display-3">List Hub</h1>
            <p className="lead">Manage existing lists, or create new ones!</p>
            <p className="lead">
              <Button color="primary">Add a List</Button>
            </p>
            <hr className="my-2" />
          </Jumbotron>
        </div>
        <CardColumns>
          <Card>
            <CardBody>
              <Col>Todo List<TodoList /></Col>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Col>Grocery List<TodoList /></Col>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Col>Joe's List<TodoList /></Col>
            </CardBody>
          </Card>
        </CardColumns>
      </Container>
    );
  }
}

export default TodoContainer;
