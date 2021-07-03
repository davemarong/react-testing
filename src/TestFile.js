import React, { useState } from "react";

export default function TestFile(props) {
  const [state, setState] = useState({ nei: "hei", jo: "Du" });
  console.log(props.tall);

  return (
    <div>
      <button
        onClick={() => {
          console.log(state);
          setState({ nei: "Heisann" });
          console.log(state);
        }}
      >
        knapp
      </button>
    </div>
  );
}
