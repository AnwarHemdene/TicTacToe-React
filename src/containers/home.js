import React from "react";
import Home from "../components/home/home";
import Grid from "../components/grid";
export default class HomeContainer extends React.Component {
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
    return <Home grid={this.state.grid} onCellClick={this.onClick} />;
  }
}
