import React from "react";

export const Counter = props => {
  return (
    <span className="counter">{`${props.counter + 1} / ${props.length}`}</span>
  );
};
