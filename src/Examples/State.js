import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  function Click() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={Click}> Click Me </button>
    </div>
  );
}
export default State;
