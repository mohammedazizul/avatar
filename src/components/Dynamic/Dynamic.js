import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JapanData from "./JapanData/JapanData";
import MalaysiaData from "./MalaysiaData/MalaysiaData";

const Dynamic = () => {
  return (
    <Container>
      <Row>
        <Col sm>
          <MalaysiaData />
        </Col>
        <p></p>
        <Col sm>
          <JapanData />
        </Col>
      </Row>
    </Container>
  );
};

export default Dynamic;
