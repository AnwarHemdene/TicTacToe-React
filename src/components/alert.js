import React from "react";
function Alert(props) {
  return (
    <div className={"alert"}>
      {props.player == null ? (
        <h2>It's a tie </h2>
      ) : (
        <h2>The winner is Player {props.player} </h2>
      )}
      <button className={"button"} onClick={props.restartGame}>
        Restart Game
      </button>
    </div>
  );
}
export default Alert;
