import React from "react";
import { connect } from "react-redux";

import Home from "../components/home/home";
import Alert from "../components/alert";
import { updateGrid } from "../redux/home/actions";
import Grid from "../components/grid";
import Cell from "../components/cell";

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: new Array(9).fill(""),
      player: Math.random() > 0.5 ? "X" : "O",
      gameOver: false,
    };
    this.onClick = this.onClick.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  onClick(index, cell) {
    console.log(index, cell);
    const newGrid = this.state.grid;
    newGrid[index] = this.state.player;
    this.setState({
      grid: newGrid,
    });
    this.checkWin();
  }
  restartGame() {
    this.setState({
      grid: new Array(9).fill(""),
      player: Math.random() > 0.5 ? "X" : "O",
      gameOver: false,
    });
  }
  checkWin() {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < 8; i++) {
      const win = wins[i];
      const a = this.state.grid[win[0]];
      const b = this.state.grid[win[1]];
      const c = this.state.grid[win[2]];

      if (a !== "" && a === b && b === c) {
        this.setState({
          gameOver: true,
        });
        return;
      }
    }
    const emptyCells = this.state.grid.filter((value) => !value);

    if (emptyCells.length === 0) {
      this.setState({
        gameOver: true,
        player: null,
      });
      return;
    }
    this.setState({
      player: this.state.player === "X" ? "O" : "X",
    });
  }
  render() {
    return this.state.gameOver ? (
      <Alert player={this.state.player} restartGame={this.restartGame} />
    ) : (
      <Home
      // grid={this.state.grid}
      // onCellClick={this.onClick}
      // player={this.state.player}
      // gameOver={this.state.gameOver}
      // restartGame={this.restartGame}
      />
    );
  }
}

const mapStateToProps = ({ home }) => {
  console.log(home);
  return {
    grid: home.grid,
    player: home.player,
    gameOver: home.gameOver,
  };
};

export default connect(mapStateToProps)(Home);
