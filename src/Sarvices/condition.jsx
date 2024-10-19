import React, { useState } from "react";

export default function Condition() {
  const [count, setCount] = useState(0);

  function AddNum() {
    setCount(count + 1);
  }
  function removeNum() {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>Add Number</h2>
      <button>{count}</button>
      <br />
      <br />
      <button onClick={AddNum}>Add</button>
      <button onClick={removeNum}>Remove</button>
    </div>
  );
}
