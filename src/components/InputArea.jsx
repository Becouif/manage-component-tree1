import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.myChange} type="text" value={props.myValue} />
      <button onClick={props.myClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;