import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SearchForm.css';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';



const SearchForm = props => (
  <div>
    <InputGroup>
      <InputGroupAddon addonType="prepend"><Button onClick={props.handleFormSubmit}>Search</Button></InputGroupAddon>
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
  </div>
  
  
);

export default SearchForm;
