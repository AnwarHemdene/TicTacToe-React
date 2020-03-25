import React from "react";
import "./home.css";
import GridContainer from "../../containers/grid";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <h1>TicTacToe</h1>
      {/*<h2>Player {props.player} </h2>*/}
      {/*<GridContainer grid={props.grid} onCellClick={props.onCellClick} />*/}
    </div>
  );
}
