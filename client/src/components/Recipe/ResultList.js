import React from "react";
import { Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import SaveBtn from './../SaveBtn';
import styled from 'styled-components';
import './ResultList.css';

const ResultList = props => (
 
      <div className="list-group">
        <Row>
          {props.results.map(result => (
            <Col sm="4">
              <Card className="resultCard">
                <CardImg top width="100%" className="img-fluid" src={result.recipe.image} alt={result.title} />
                <CardBody className="resultCardBody">
                  <CardTitle><h2 className="resultCardTitle"> {result.recipe.label}</h2></CardTitle>
                  <CardText>{result.recipe.ingredients.map(ingredient => (<h5 className="resultCardText">{ingredient.text}</h5>))}</CardText>
                  <Button className="recipeBtn"><a href={result.recipe.url}>Go to Recipe</a></Button>
                  <SaveBtn className="saveBtn" onClick={() => props.handleRecipeSave(result.recipe.url, result.recipe.label)} />
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
)

export default ResultList;
