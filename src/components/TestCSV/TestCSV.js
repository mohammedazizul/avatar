import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { readRemoteFile } from "react-papaparse";
import csvFile from "../../data/csv-data/data.csv";

const TestCSV = () => {
  const hasSetData = useRef(false); // fix netlify error of : React Hook useEffect has a missing dependency
  const [fileData, setFileData] = useState(); // initialize file data
  const [loading, setLoading] = useState(true); //  boolean for setting data loading state
  // to load data from file once
  useEffect(() => {
    if (!hasSetData.current) {
      readRemoteFile(csvFile, {
        download: true,
        header: false,
        dynamicTyping: false,
        complete: (results) => {
          // var temp = results.map(data => ({ value: data.Population }));
          // console.log(temp)
          console.log("csv-file-data: ", results.data);
          setFileData(results.data);
          setLoading(false);
          hasSetData.current = true;
          console.log(fileData);
        },
      });
    }
  }, [fileData]);

  // data for Chart.js
  const data = {
    labels: [
      "Johor",
      "Kedah",
      "Kelantan",
      "Malacca",
      "Negeri Sembilan",
      "Pahang",
      "Penang",
      "Perak",
      "Perlis",
      "Sabah",
      "Sarawak",
      "Selangor",
      "Terengganu",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: fileData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(266, 159, 64, 0.2)",
          "rgba(277, 88, 144, 0.2)",
          "rgba(54, 155, 235, 0.2)",
          "rgba(288, 201, 86, 0.2)",
          "rgba(75, 182, 192, 0.2)",
          "rgba(153, 202, 255, 0.2)",
          "rgba(299, 179, 64, 0.2)",
          "rgba(133, 88, 144, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(266, 159, 64, 1)",
          "rgba(277, 88, 144, 1)",
          "rgba(54, 155, 235, 1)",
          "rgba(288, 201, 86, 1)",
          "rgba(75, 182, 192, 1)",
          "rgba(153, 202, 255, 1)",
          "rgba(299, 179, 64, 1)",
          "rgba(133, 88, 144, 1)",
        ],
      },
    ],
  };

  // options for Chart.js
  const options = {
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Votes Count in Malaysia",
      },
    },
  };

  console.log(csvFile);
  return (
    <div>
      <h2>data from csv file</h2>
      {!loading ? <p>{JSON.stringify(fileData)}</p> : <div>Loading...</div>}
      <Bar data={data} options={options} />
    </div>
  );
};

export default TestCSV;
