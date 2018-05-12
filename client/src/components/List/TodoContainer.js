import React, { Component } from "react";
import GroceryList from "./ListGrocery/GroceryList";
import GenericList from "./ListGeneric/GenericList";
import TodoList from "./ListTodo/TodoList";
import "./TodoContainer.css"
import { Container, CardColumns, Button} from 'reactstrap';
import styled from 'styled-components';
    
class TodoContainer extends Component {

  state = {
    lists: []
  };
  
  componentDidMount() {
    let todos = [];

    todos.push(<GroceryList />);
    todos.push(<TodoList />);
    todos.push(<GenericList />);

    this.setState({lists: todos});
  }

  addTodoList = () => {
    let todos = [...this.state.lists];
    todos.push(<GenericList />);
    this.setState({lists: todos});
  }

  render() {
    
    const Jumbotron = styled.div`
      margin: 2em;
      padding: 2em;
      background-color: #eceeef;
      border-radius: 5px;
    `

    return (
      
      <Container>
        <div>
          <Jumbotron>
            <h1 className="display-3">List Hub</h1>
            <p className="lead">Manage existing lists, or create new ones!</p>
            <p className="lead">
              <Button color="primary" onClick={this.addTodoList}>Add a List</Button>
            </p>
          </Jumbotron>
        </div>
        
        <CardColumns>
          {
            this.state.lists.map(comp => comp)
          }
        </CardColumns>
      </Container>
    );
  }
}

export default TodoContainer;
