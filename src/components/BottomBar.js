import React from "react";

const BottomBar = props => {
  return (
    <div className="bottombar">
      <button onClick={props.previous}>Previous</button>
      <div>
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
      </div>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default BottomBar;
