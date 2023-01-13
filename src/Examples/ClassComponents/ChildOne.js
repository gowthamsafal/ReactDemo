import React from "react";
const ChildOne = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        {props.name} a.k.a {props.jobRole}
      </h1>
    </div>
  );
};
export default ChildOne;
