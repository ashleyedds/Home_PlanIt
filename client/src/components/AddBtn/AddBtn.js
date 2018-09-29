import React from "react";
import { Button } from "reactstrap"
import "./SortBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


const SortBtn = props => (
  <Button color="danger" {...props}>Add It!</Button>
);

export default SortBtn;
