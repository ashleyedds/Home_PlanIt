import React from "react";
import { Row, Col } from 'reactstrap';
import { Card, CardBody, CardImg, CardTitle, Button } from 'reactstrap';
import DeleteBtn from './../DeleteBtn';
import './SavedList.css';

const SavedList = props => (
  <div className="list-group">
    <Row>
      {props.saved.map((save, idx) => (
        <Col sm="4" key={['saved', idx].join('_')}>
          <Card className="savedCard">
          <CardImg top width="100%" className="img-fluid" src={save.img} alt={save.title} />
            <CardBody className="savedCardBody">
              <CardTitle><span className="savedCardTitle">{save.title}</span></CardTitle>
              <Button className="recipeBtn"><a href={save.ingredients}>Go to Recipe</a></Button>
              <DeleteBtn className="deleteBtn" onClick={() => props.deleteRecipe(save._id)}/>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
)

export default SavedList;
