import React from "react";
import { Bar } from "react-chartjs-2";

const DynamicBar = (props) => {
  const data = props.myData;
  const country = data[0].country.value;
  let year = [];
  let value = [];

  data.map((item) =>
    (function () {
      if (item.value !== null) {
        year.unshift(item.date);
        value.unshift(item.value);
      }
    })()
  );

  //   console.log(year, value);

  const barData = {
    labels: year,
    datasets: [
      {
        label: `Mortality caused by road traffic injury (per 100,000 population) ${country}`,
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
