const Player = (type) => {
  let turn = false;
  let fleet = [];

  const attack = (pos, board) => board.recieveAttack(pos);

  return {
    attack,
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
