import React from "react";
import Grid from "../components/grid";
function GridContainer(props) {
  return <Grid grid={props.grid} onCellClick={props.onCellClick} />;
}
export default GridContainer;
