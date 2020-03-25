import React from "react";
import Cell from "../components/cell";

function Grid(props) {
  return (
    <div className={"grid"}>
      {props.grid.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          index={index}
          onCellClick={props.onCellClick}
        />
      ))}
    </div>
  );
}
export default Grid;
