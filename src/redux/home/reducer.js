import initialState from "./initialState";
export default (state = initialState, action) => {
  console.log(action);
  if (action.type === "UPDATE_GRID") {
    const newUpdates = action.payload;
    return state.map((item) => {
      return {
        ...item,
        grid: newUpdates.grid,
        player: newUpdates.player,
        gameOver: newUpdates.gameOver,
      };
    });
  }
  console.log(state);

  return state;
};
