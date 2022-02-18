const GameBoard = require('./gameboard');

const Player = (type) => {
  let turn = false;
  let fleet = [];

  const attack = (pos, board) => board.recieveAttack(pos);

  const randomMove = (board) => {
    const [row, col] = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const field = board.arr[row][col];
    if (field === 'miss' || typeof field !== 'object') {
      randomMove(board);
    } else {
      const pos = { row, col };
      board.recieveAttack(pos);
    }
  };
  return {
    attack,
    randomMove,
    get type() {
      return type;
    },
    get fleet() {
      return fleet;
    },
    get turn() {
      return turn;
    },
  };
};

module.exports = Player;
