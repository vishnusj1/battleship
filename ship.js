const ship = (len) => {
  let hits = [...Array(len).fill(null)];

  const hit = (index) => {
    if (hits[index] === 'hit' || hits[index] === undefined) return;
    hits[index] = 'hit';
  };
  const isSunk = () => {
    return hits.every((cell) => cell !== null);
  };
  return {
    hit,
    isSunk,
    get length() {
      return len;
    },
    get hits() {
      return hits;
    },
  };
};

module.exports = ship;
