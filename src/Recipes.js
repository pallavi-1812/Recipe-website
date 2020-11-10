import React from "react";
import { Card,CardBody,CardText,CardTitle,CardSubtitle,CardImg} from "reactstrap";

const Recipes = ({ name, calories, image, ingd, caution, HealthL }) => {
    if(caution===''){
        caution='None';
    }
  return (
    <div className="container">
      <div className="row">
      <Card className="col-7 offset-2 mb-4">
      <CardImg top alt={name} src={image} className="mt-3"/>
      <CardBody>
      <CardTitle tag="h3"> {name} </CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        Calories : {calories} Kcal
      </CardSubtitle>
      <CardText>
        <p> Ingredients : {ingd} </p>
        <p> Caution : {caution} </p>
        <p> Health Labels : {HealthL} </p>
      </CardText>
      </CardBody>
      </Card>
      </div>
    </div>
  );
};

export default Recipes;
