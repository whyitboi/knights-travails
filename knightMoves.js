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
  //  const path =[]

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

  function path() {
    if (start === end) return;
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
      let square = queue.shift();
      if (queue[0] !== end) queue.push(makeMoves(square));
    }
  }
}
