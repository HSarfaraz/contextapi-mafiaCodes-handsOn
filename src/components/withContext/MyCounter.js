import React from "react";
import { useCounter } from "../withContext/context/CounterContext.js";
const MyCounter = () => {
  const { count, increaseCount, decreaseCount } = useCounter();
  return (
    <div>
      <h3>Counter Component</h3>
      <p>Paragraph: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default MyCounter;
