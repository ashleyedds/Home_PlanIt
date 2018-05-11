import React from "react";

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle
} from 'reactstrap';
import styled, { css } from 'styled-components';

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
