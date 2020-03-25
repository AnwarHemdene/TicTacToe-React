import React from "react";
function Cell(props) {
  return (
    <div
      className="cell"
      onClick={() => props.onCellClick(props.index, props.value)}
    >
      {props.value}
    </div>
  );
}
export default Cell;
