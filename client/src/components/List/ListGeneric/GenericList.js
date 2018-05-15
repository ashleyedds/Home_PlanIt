import React, { Component } from "react";
import GenericItems from "./GenericItems";
import "./GenericList.css";
import API from "../../../utils/listAPI";
import axios from "axios";
import styled from 'styled-components';
import { Card,  CardTitle } from 'reactstrap';

class GenericList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            user: null
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
        axios.get("/auth/user").then(response => {
            console.log(response.data.user)
            if (!!response.data.user) {
              console.log('THERE IS A USER')
              console.log(response.data.user.local.username)
              this.setState({
                user: response.data.user
              })
              console.log(this.state)
              this.loadList();
            //   this.updateSavedList();
            }
      
          })
    }
    
    loadList() {
        console.log("Saved Update ========" + this.state.user._id)
        axios.get('/api/generic/' + this.state.user._id).then(res => {
          this.setState({ items: res.data })
          console.log(this.state.items)
        })
    };

    handleFormSubmit(item) {
        const genericItem = {
            title: item.title,
            key: item.key,
            user: this.state.user
            
          }
          axios.post("/api/generic", genericItem)
          this.loadList()
    };

    deleteItem(key, id) {
        axios.delete('/api/generic/' + id)
        .then(res => this.loadList())
        .catch(err => console.log(err));
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