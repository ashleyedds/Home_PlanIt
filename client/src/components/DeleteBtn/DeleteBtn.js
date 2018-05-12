import React from "react";
import { Button } from "reactstrap"
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


const DeleteBtn = props => (
  <Button color="danger" {...props}>Delete</Button>
);

export default DeleteBtn;
