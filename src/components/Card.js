import React from "react";

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
      <h1>{name}</h1>
      <h2>is from: {from}</h2>
      <h2>fun fact which is: {funFact}</h2>
      <h2>prefers: {cityOrCountry}</h2>
      <h2>likes to be: {indoorsOrOutdoors}</h2>
      <h2>travels: {travel}</h2>
      <h2>wants to eat: {food}</h2>
      <h2>has a: {dogOrCat}</h2>
    </div>
  );
};
