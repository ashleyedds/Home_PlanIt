import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key, id) {
        this.props.delete(key, id);
    }
    createTasks(item) {
        
        return <li onClick={() => this.delete(item.key, item._id)}
           id={item._id} key={item.key}>{item.title}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var todoItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {todoItems}
                </FlipMove>
            </ul>
        );
    }
};

export default TodoItems;