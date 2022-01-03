import React from "react";
import LoadComments from "./LoadComments";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'



const DishDetail = props => {
    return (
        <div>

            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name}>
                </CardImg>

                <CardBody style={{ textAlign: "left" }}>

                    <CardTitle> {props.dish.name}</CardTitle>
                    <CardText>
                        <p> {props.dish.description} </p>

                        <p> {props.dish.price} </p>

                        <hr />

                        <LoadComments comments={props.dish.comments} />




                    </CardText>

                </CardBody>
            </Card>
        </div>
    );

}


export default DishDetail;

