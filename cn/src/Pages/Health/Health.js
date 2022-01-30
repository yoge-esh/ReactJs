import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Health.css";
function Health() {
  return (
    <div className="health">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/400/300/?blur=2" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/400/300/?blur=2" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Health;
