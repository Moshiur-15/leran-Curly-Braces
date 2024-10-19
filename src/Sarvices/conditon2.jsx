import React, { useState } from "react";

export default function Condition2() {
  const [count, setCount] = useState(0);
  function AddNumber() {
    setCount(count + 1);
  }
  function RemoveNumber() {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>Add Number</h2>
      <button onClick={AddNumber}>AddNumber : {count}</button>
      <button onClick={RemoveNumber}>RemoveNumber : {count}</button>
    </div>
  );
}
