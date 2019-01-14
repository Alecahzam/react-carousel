import React from "react";
import { Counter } from "./Counter";

export const Card = props => {
  const {
    name,
    from,
    funFact,
    cityOrCountry,
    indoorsOrOutdoors,
    travel,
    food,
    dogOrCat
  } = props.students[props.counter];
  return (
    <div className="card">
      <div className="title">
        <h1>{name}</h1>
        <Counter counter={props.counter} length={props.length} />
      </div>
      <div className="content">
        <h2>{`is from:  ${from}`}</h2>
      </div>
      <div className="content">
        <h2>{`fun fact: ${funFact}`}</h2>
      </div>
      <div className="content">
        <h2>{`prefers: ${cityOrCountry}`}</h2>
      </div>
      <div className="content">
        <h2>{`likes to be: ${indoorsOrOutdoors}`}</h2>
      </div>
      <div className="content">
        <h2>{`travels: ${travel}`}</h2>
      </div>
      <div className="content">
        <h2>{`wants to eat: ${food}`}</h2>
      </div>
      <div className="content">
        <h2>{`has a: ${dogOrCat}`}</h2>
      </div>
    </div>
  );
};
