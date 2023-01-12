import "./App.css";
import React, { Component } from "react";
import State from "./Examples/State";
import MapExample from "./Examples/HigherOrderFunctions/MapExample";
import Demo from "./Examples/ClassComponents/Demo";
import Parent from "./Examples/ClassComponents/Parent";
import StateVariable from "./Examples/ClassComponents/StateVariable";
import Display from "./Examples/ClassComponents/Display";
function App() {
  return (
    <div>
      {/* <State /> */}
      {/* <MapExample /> */}
      {/* <Demo /> */}
      {/* <Parent /> */}
      <StateVariable />
    </div>
  );
}

export default App;
