import React from "react";
import Cell from "./cell";

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: new Array(9).fill(""),
      player: "X",
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(index, cell) {
    console.log(index, cell);
    const newGrid = this.state.grid;
    newGrid[index] = this.state.player;
    this.setState({
      grid: newGrid,
      player: this.state.player === "X" ? "O" : "X",
    });
  }
  render() {
    return (
      <div className={"grid"}>
        {this.state.grid.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            onCellClick={() => this.onClick(index, cell)}
          />
        ))}
      </div>
    );
  }
}
