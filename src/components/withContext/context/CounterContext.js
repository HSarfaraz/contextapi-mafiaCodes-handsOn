import { useState, createContext, useContext } from "react";

const CounterContext = createContext();
export const useCounter = () => {
  return useContext(CounterContext);
};

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const value = {
    count,
    increaseCount,
    decreaseCount,
  };
  return (
    /* `<CounterContext></CounterContext>` is creating an instance of the `CounterContext` and
       providing it as the value for the `CounterContextProvider`. This allows components that are
       descendants of the `CounterContextProvider` to access the value of the `CounterContext`. */
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
