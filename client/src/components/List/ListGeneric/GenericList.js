import React, { Component } from "react";
import GenericItems from "./GenericItems";
import "./GenericList.css";
import API from "../../../utils/listAPI";
import styled from 'styled-components';
import { Card,  CardTitle } from 'reactstrap';

class GenericList extends Component {
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
        e.preventDefault();
    }

    componentDidMount() {
        this.loadList();
    }
    
    loadList() {
        API.getList()
            .then(res => this.setState({items: res.data}))
            
            .catch(err => console.log(err));
    };

    handleFormSubmit(item) {
          API.saveList({
            title: item.title,
            key: item.key,
            MemberId: 1
            
          })
            .then(res => console.log("something"))
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

        const CardBody = styled.div`
            background-color: #eceeef;
        `

        return (
            <Card>
                <CardTitle>
                    Generic List
                </CardTitle>
                <CardBody>
                    <div className="todoListMain">
                        <div className="header">
                            <form onSubmit={this.addItem}>
                                <input ref={(a) => this._inputElement = a}
                                    placeholder="enter a list item">
                                </input>
                                <button type="submit">add</button>
                            </form>
                        </div>
                        <GenericItems entries={this.state.items}
                            delete={this.deleteItem} />
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default GenericList;