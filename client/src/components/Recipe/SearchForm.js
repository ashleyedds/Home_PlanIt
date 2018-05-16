import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
import './SearchForm.css';

const SearchForm = props => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <Button onClick={props.handleFormSubmit}>Search</Button>
    </InputGroupAddon>
    <Input 
      onChange={props.handleInputChange}
      value={props.search}
      name="search"
      type="text"
      className="form-control"
      placeholder="Enter a recipe"
      id="search"
    />
  </InputGroup>
);

export default SearchForm;
