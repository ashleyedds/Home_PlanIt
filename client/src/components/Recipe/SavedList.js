import React, { Component } from "react";

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup
} from 'reactstrap';
import styled, { css } from 'styled-components';
import SaveBtn from './../SaveBtn';
import DeleteBtn from './../DeleteBtn';



const SavedList = props => (

 
      <div className="list-group">
        <Row>
          {props.saved.map(save => (
            <Col sm="4">
              <Card>
                <CardBody>
                  <CardTitle><h2>{save.title}</h2></CardTitle>
                  <Button><a href={save.ingredients}>Go to Recipe</a></Button>
                  <DeleteBtn onClick={() => props.deleteRecipe(save._id)}/>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
)



export default SavedList;