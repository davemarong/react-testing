import React from "react";

export default function CounterComponent({
  count,
  setCount,
  increaseCount,
  decreaseCount,
}) {
  // export default function CounterComponent(props) {
  //   console.log("This the the props object", props);
  //   console.log("This is the current state value `count`", props.count);
  return (
    <div>
      <button onClick={increaseCount}>+</button>
      <span>{count}</span>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}
