import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ name }) => {
  return (
    <div>
      <h3>ComponentB</h3>
      {/* <p>Name is: {name}</p> */}
      <ComponentC name={name} />
    </div>
  );
};

export default ComponentB;
