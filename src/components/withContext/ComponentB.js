import React from "react";
import { useCounter } from "../withContext/context/CounterContext";
const ComponentB = () => {
  const { increaseCount } = useCounter();
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  );
};

export default ComponentB;
