import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  const [cart, setCart] = useState([]);

  const buy = (ind) => {
    const currentProduct = props.products[ind];
    setCart((prevCart) => [...prevCart, currentProduct]);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.SUPER_SERVER + props.prod.img} />
      <Card.Body>
        <Card.Title>{props.prod.desc}</Card.Title>
        <Card.Text>{props.prod.price}$</Card.Text>
        <Button onClick={() => buy(props.ind)} variant="primary">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
