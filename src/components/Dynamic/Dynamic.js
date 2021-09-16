import React, { createContext } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import JapanData from "./JapanData/JapanData";
import MalaysiaData from "./MalaysiaData/MalaysiaData";
import MixedDynamic from "./MixedDynamic/MixedDynamic";

export const DynamicDataContext = createContext();

const Dynamic = () => {
  const dynamicData = {
    japan: "",
    malaysia: "",
  };

  return (
    <DynamicDataContext.Provider value={dynamicData}>
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
        <Row>
          <MixedDynamic />
        </Row>
      </Container>
    </DynamicDataContext.Provider>
  );
};

export default Dynamic;
