import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { DynamicDataContext } from "../Dynamic";
import DynamicBar from "../DynamicBar/DynamicBar";
import DynamicTable from "../DynamicTable/DynamicTable";

const MalaysiaData = () => {
  const URLmy = `https://api.worldbank.org/v2/country/my/indicator/SH.STA.TRAF.P5?date2010:2019&format=json`;
  const [myData, setMyData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const dynamicData = useContext(DynamicDataContext);
  // console.log(dynamicData);

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

  dynamicData.malaysia = myData;

  return (
    <div>
      <Container>
        {!isLoaded && <h2>Loading . . .</h2>}
        <p></p>
        <Row>
          <Col sm>
            <Container>
              <Row>
                <img
                  className="flagImage"
                  src="https://lipis.github.io/flag-icon-css/flags/4x3/my.svg"
                  alt="Malaysia Flag"
                />
              </Row>
              <Row>
                <Button
                  className="mt-1"
                  onClick={() => setShowTable(!showTable)}
                >
                  Tabular Format
                </Button>
              </Row>
              <Row>
                <Button className="mt-1" onClick={() => setShowBar(!showBar)}>
                  Bar Chart
                </Button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      {showTable && (
        <Container>
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
          <DynamicBar key={myData.date} myData={myData} />
        </Container>
      )}
      <br />
    </div>
  );
};

export default MalaysiaData;
