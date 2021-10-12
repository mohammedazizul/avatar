import "./InfoCard.css";
import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";

const InfoCard = (props) => {
  const { image, name, major, responsibilities } = props.details;

  return (
    <Col xs={12} md={3}>
      <Card className="infoCard" style={{ border: "0px" }}>
        <Card.Img
          className="img-fluid rounded-circle"
          variant="top"
          src={image}
        />

        <div className="divCardName">
          <Card.Title>
            <h5>{name}</h5>
          </Card.Title>
        </div>

        <div className="majorDiv">
          <h6 className="majorStyle">({major})</h6>
        </div>

        <p>Responsibilities</p>

        <ListGroup style={{ textAlign: "left" }}>
          {responsibilities.map((item) => (
            <ListGroup.Item key={item.sl}>{item.task}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Col>
  );
};

export default InfoCard;
