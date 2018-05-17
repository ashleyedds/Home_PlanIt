import React from "react";
import "./hello.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


const Hello = props => (
  <h4 className="hello">{props.user}</h4>
);

export default Hello;
