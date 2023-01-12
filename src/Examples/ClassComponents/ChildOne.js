import React from "react";
const ChildOne = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Hello Vishwas</h1>
      <h1> {props.name}</h1>
    </div>
  );
};
export default ChildOne;
