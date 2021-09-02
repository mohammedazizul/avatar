import React from "react";

const DynamicTable = (props) => {
  const { date, value } = props.data;
  console.log(props.data.date);

  return (
    <tr>
      {value && <td>{date}</td>}
      {value && <td>{value}</td>}
    </tr>
  );
};

export default DynamicTable;
