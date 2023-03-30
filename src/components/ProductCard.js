import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap';


const ProductCard = props => {
    let {imgSrc, price, title} = props.data;
    return (
        <card className="p-0 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={imgSrc} />
            </div>
            <Card.Body className="text-center">
                <Card.Title className="display-6">{price}</Card.Title>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <button className="Button" variant="success">Adicionar ao carrinho</button>
        </card>
    );
};

export default ProductCard;