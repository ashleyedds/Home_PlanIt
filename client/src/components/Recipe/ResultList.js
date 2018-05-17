import React from "react";
import { Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import SaveBtn from './../SaveBtn';
import './ResultList.css';

const ResultList = props => (
  <div className="list-group">
    <Row>
      {props.results.map((result, idx) => (
        <Col sm="4" key={['result', idx].join('_')}>
          <Card className="resultCard" >
            <CardImg top width="100%" className="img-fluid" src={result.recipe.image} alt={result.title} />
            <CardBody className="resultCardBody">
              <CardTitle><span className="resultCardTitle"> {result.recipe.label}</span></CardTitle>
              <CardText>{result.recipe.ingredients.map((ingredient,ind) => (<span className="resultCardText" key={['ingredient', ind].join('_')}>{ingredient.text}</span>))}</CardText>
              <Button className="recipeBtn"><a href={result.recipe.url}>Go to Recipe</a></Button>
              <SaveBtn className="saveBtn" onClick={() => props.handleRecipeSave(result.recipe.url, result.recipe.label, result.recipe.image)} />
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
)

export default ResultList;
