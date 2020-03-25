export default {
  id: 0,
  grid: new Array(9).fill(""),
  player: Math.random() > 0.5 ? "X" : "O",
  gameOver: false,
};
