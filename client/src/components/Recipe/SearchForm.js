import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const SearchForm = props => (
  <Form>
      <FormGroup className="form-group">
        <Label htmlFor="search">Search:</Label>
        <Input 
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a recipe"
          id="search"
        />
      </FormGroup>
      <Button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
        Search
      </Button>
  </Form>
  
);

export default SearchForm;
