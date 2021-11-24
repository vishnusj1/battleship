const Ship = require('./ship');

const GameBoard = () => {
  const initArr = (rows, cols) => {
    const arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(cols).fill(null);
    }
    return arr;
  };

  const isPosValid = ({ x, y }) => {
    if (x > 9 || y > 9) return false;
    return true;
  };

  const selectPosition = ({ x, y }, i) => {
    let row = x;
    let col = y + i;
    return [row, col];
  };

  let board = initArr(10, 10);
  let placedShips = [];

  const placeShip = (ship, pos) => {
    if (isPosValid(pos) === false) return;
    for (let i = 0; i < ship.length; i++) {
      const [row, col] = selectPosition(pos, i);
      board[row][col] = { ship, hitIndex: i, hit: false };
    }
    placedShips.push(ship);
  };

  const recieveAttack = (pos) => {
    const { x: row, y: col } = pos;
    if (isPosValid(pos) === false) return;
    if (board[row][col] === null) {
      board[row][col] = 'miss';
    } else if (typeof board[row][col] === 'object') {
      board[row][col].ship.hit(board[row][col].hitIndex);
      if (board[row][col].hit == true) return;
      board[row][col].hit = true;
    }
    return board[row][col];
  };

  const allShipSunk = () => {
    return placedShips.every((ship) => ship.isSunk());
  };
  return {
    placeShip,
    recieveAttack,
    allShipSunk,
    isPosValid,
    get arr() {
      return board;
    },
    get placedShips() {
      return placedShips;
    },
  };
};
module.exports = GameBoard;
