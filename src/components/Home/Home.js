import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeCard from "./HomeCard/HomeCard";
const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <HomeCard />
        </Col>
        <Col>
          <HomeCard />
        </Col>
        <Col>
          <HomeCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
