import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Col, Container, Row, Table } from "react-bootstrap";
import DynamicBar from "./DynamicBar/DynamicBar";

import DynamicTable from "./DynamicTable/DynamicTable";

const Dynamic = () => {
  const URLmy = `https://api.worldbank.org/v2/country/my/indicator/SH.STA.TRAF.P5?date2010:2019&format=json`;
  const [myData, setMyData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    fetch(URLmy)
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result[1]);
          setIsLoaded(true);
          setMyData(result[1]);
        },
        (error) => {
          setErrors(error);
          console.log(errors);
        }
      );
  }, [URLmy, errors]);

  return (
    <div>
      <Container>
        {!isLoaded && <h2>Loading . . .</h2>}
        <p></p>
        <Row>
          <Col sm>
            <Button onClick={() => setShowTable(!showTable)}>
              Click me to see data in Tabular Format
            </Button>
          </Col>
          <Col sm>
            <Button onClick={() => setShowBar(!showBar)}>
              Click me to see data in Bar Chart
            </Button>
          </Col>
        </Row>
      </Container>

      {showTable && (
        <Container>
          <p></p>
          <Alert variant="success" style={{ color: "black" }}>
            Mortality caused by road traffic injury (per 100,000 population) in
            Malaysia
          </Alert>
          <Table responsive>
            <thead>
              <tr>
                <th>Year</th>
                <th>
                  Mortality caused by road traffic injury (per 100,000
                  population)
                </th>
              </tr>
            </thead>
            <tbody>
              {myData.map((data) => (
                <DynamicTable key={data.date} data={data} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
      {showBar && (
        <Container>
          <p></p>
          <Alert variant="success" style={{ color: "black" }}>
            Mortality caused by road traffic injury (per 100,000 population) in
            Malaysia
          </Alert>
          <DynamicBar key={myData.date} myData={myData} />
        </Container>
      )}
      <br />
    </div>
  );
};

export default Dynamic;
