import React from "react";
import { Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import SaveBtn from './../SaveBtn';


const ResultList = props => (

 
      <div className="list-group">
        <Row>
          {props.results.map(result => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" className="img-fluid" src={result.recipe.image} alt={result.title} />
                <CardBody>
                  <CardTitle><h2>{result.recipe.label}</h2></CardTitle>
                  <CardText>{result.recipe.ingredients.map(ingredient => (<p>{ingredient.text}</p>))}</CardText>
                  <Button><a href={result.recipe.url}>Go to Recipe</a></Button>
                  <SaveBtn onClick={() => props.handleRecipeSave(result.recipe.url, result.recipe.label)} />
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
)



export default ResultList;
