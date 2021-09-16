import { Button, Container } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import { DynamicDataContext } from "../Dynamic";

const MixedDynamic = () => {
  const [showMixedData, setShowMixedData] = useState(false);
  const dynamicData = useContext(DynamicDataContext);
  //   console.log("dynamicData", dynamicData.japan);

  let myData = [...dynamicData.malaysia];
  let jpData = [...dynamicData.japan];
  let year = [];
  let jpValue = [];
  let myValue = [];

  if (jpData !== []) {
    jpData.map((item) =>
      (function () {
        if (item.value !== null) {
          year.unshift(item.date);
          jpValue.unshift(item.value);
        }
      })()
    );
  }

  if (myData !== []) {
    myData.map((item) =>
      (function () {
        if (item.value !== null) {
          //   year.unshift(item.date);
          myValue.unshift(item.value);
        }
      })()
    );
  }

  const data = {
    labels: year,
    datasets: [
      {
        type: "line",
        label: "MALAYSIA LINE",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: myValue,
      },
      {
        type: "line",
        label: "JAPAN LINE",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
        fill: false,
        data: jpValue,
      },
      {
        type: "bar",
        label: "MALAYSIA",
        backgroundColor: "rgb(255, 99, 132)",
        data: myValue,
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "JAPAN",
        backgroundColor: "rgb(75, 192, 192)",
        data: jpValue,
      },
    ],
  };
  return (
    <Container>
      <Button className="mt-1" onClick={() => setShowMixedData(!showMixedData)}>
        Compare Malaysia and Japan
      </Button>
      {showMixedData && <Bar data={data}></Bar>}
    </Container>
  );
};

export default MixedDynamic;
