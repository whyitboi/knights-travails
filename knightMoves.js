export function knightMoves(start, end) {
  //create 8 defined jumps the knight can make
  const jumps = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  function makeMoves(square) {
    const moves = [];
    for (const jump of jumps) {
      const newX = square[0] + jump[0];
      const newY = square[1] + jump[1];

      if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
        moves.push([newX, newY]);
      }
    }
    return moves;
  }
}
