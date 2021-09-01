import React from "react";
import { Button, Card } from "react-bootstrap";

const HomeCard = () => {
  return (
    <Card style={{ width: "18rem", marginTop: "10px" }}>
      <Card.Img
        variant="top"
        src="https://w7.pngwing.com/pngs/535/693/png-transparent-suddenlink-communications-altice-usa-telecommunication-iphone-loading-blue-electronics-rectangle.png"
      />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Details Here . . .</Card.Text>
        <Button variant="primary">Click Me to See</Button>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
