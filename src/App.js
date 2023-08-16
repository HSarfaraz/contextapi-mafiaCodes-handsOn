import React, { useState } from "react";
import "./App.css";
import MyCounter from "./components/withContext/MyCounter";
import CounterContextProvider from "./components/withContext/context/CounterContext";
import ComponentA from "./components/withContext/ComponentA";

function App() {
  const [name, setName] = useState("Turely Sarfaraz");
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>Context API</h1>
        {/* <div>
        <h3>Without Context</h3>
        <ComponentA name={name} />
        <ComponentB name={name} />
      </div> */}

        <div>
          <h3>With Context</h3>
          <MyCounter />
          <ComponentA />

        </div>
      </div>
    </CounterContextProvider>
  );
}

export default App;
