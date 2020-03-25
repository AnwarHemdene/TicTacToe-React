import React from "react";
function Cell(props) {
  console.log(props);
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
