import React from "react";
import "./App.css";
import Greeting from "./component/Greeting";
import Counter from "./component/Counter";

function App() {
  return (
    <div>
      <Greeting name={"Charles"} message={"Welcome"} />
      <Counter />
    </div>
  );
}

export default App;
