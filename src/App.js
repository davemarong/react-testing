import React, { useState } from "react";
import CounterComponent from "./CounterComponent";
import JSX from "./JSX";
import TestFile from "./TestFile";
function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      {/* <CounterComponent
        count={counter}
        setCount={setCounter}
        increaseCount={increaseCounter}
        decreaseCount={decreaseCounter}
      />
       <JSX /> */}
      {/* <TestFile /> */}
    </>
  );
}
export default App;
