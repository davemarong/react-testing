import React, { useState } from "react";
import Counter from "./Counter";
function App() {
  const [counter, setCounter] = useState(0);
  const [myName, setMyname] = useState("Missingo");
  return (
    <>
      <Counter
        counter={counter}
        setCounter={setCounter}
        myName={myName}
        setMyname={setMyname}
      />
    </>
  );
}

export default App;
