import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import API from "../../utils/listAPI";
import styled, { css } from 'styled-components';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                title: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                console.log(prevState);
                return {
                    items: prevState.items.concat(newItem)
                    
                };
            });
            this.handleFormSubmit(newItem)
            this._inputElement.value = "";
        }
        
        // this.handleFormSubmit();
        e.preventDefault();
    }

    componentDidMount() {
        this.loadList();
      }
    
      // Loads all books  and sets them to this.state.books
      loadList() {
        API.getList()
          .then(res => this.setState({items: res.data}))
            
          .catch(err => console.log(err));
      };


    
      

    handleFormSubmit(item) {

        // event.preventDefault();
        
          API.saveList({
            title: item.title,
            key: item.key,
            MemberId: 1
            
          })
            .then(res => console.log("something"))//this.loadBooks())
            .catch(err => console.log(err));
        console.log(this.state.items)
      };

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        );
    }
}

export default TodoList;