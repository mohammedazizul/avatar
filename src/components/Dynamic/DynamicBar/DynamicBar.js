import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";

const DynamicBar = (props) => {
  const data = props.myData;
  let year = [];
  let value = [];

  useEffect(() => {}, []);

  data.map((item) =>
    (function () {
      if (item.value !== null) {
        year.push(item.date);
        value.push(item.value);
      }
    })()
  );

  //   console.log(year, value);

  const barData = {
    labels: year,
    datasets: [
      {
        label:
          "Mortality caused by road traffic injury (per 100,000 population) in Malaysia",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: value,
      },
    ],
  };

  const barOption = {
    title: {
      display: true,
      text: "",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
  };
  return <div>{year !== [] && <Bar data={barData} options={barOption} />}</div>;
};

export default DynamicBar;
