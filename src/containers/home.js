import React from "react";
import "./home.css";
import GridContainer from "../containers/grid";

export default function Home() {
  return (
    <div>
      <h1>TicTacToe</h1>
      <h2>Player </h2>
      <GridContainer />
    </div>
  );
}
