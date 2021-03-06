import React from "react";
import { Button } from "reactstrap"
import "./UpdateBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

const UpdateBtn = props => (
  <Button color="info" {...props}>Update</Button>
);

export default UpdateBtn;
