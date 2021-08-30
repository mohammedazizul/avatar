import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import JapanData from "./JapanData/JapanData";
import MalaysiaData from "./MalaysiaData/MalaysiaData";

const Dynamic = () => {
  return (
    <Container>
      <Row>
        <p></p>
        <Badge bg="success">
          <span style={{ color: "red", fontSize: "14px" }}>LIVE </span>
          Data for mortality caused by road traffic injury
        </Badge>
        <Col sm>
          <MalaysiaData />
        </Col>
        <Col sm>
          <JapanData />
        </Col>
      </Row>
    </Container>
  );
};

export default Dynamic;
