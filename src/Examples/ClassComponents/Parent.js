import React from "react";
import ChildOne from "./ChildOne";

const Parent = () => {
  return (
    <div>
      <ChildOne name="Safal" jobRole="WebDev" />
      <p>I am Gowtham</p>
      <ChildOne name="Gowtham" jobRole="WebDev" />
      <button>action</button>
      <ChildOne name="Sappu" jobRole="WebDev" />
    </div>
  );
};
export default Parent;
