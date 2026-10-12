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

  function viableSquares(currentSquare) {
    const moves = [];
    for (const jump of jumps) {
      const newX = currentSquare[0] + jump[0];
      const newY = currentSquare[1] + jump[1];

      if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
        moves.push([newX, newY]);
      }
    }
    return moves;
  }

  function findPaths() {
    //if (start === end) return;
    const queue = [[start]];
    while (queue.length > 0) {
      const path = queue.shift();
      //set current to the last square in the path
      const currentSquare = path[path.length - 1];

      if (currentSquare[0] === end[0] && currentSquare[1] === end[1])
        return path;
      else {
        for (const square of viableSquares(currentSquare)) {
          queue.push([...path, square]);
        }
      }
      // return path;
    }
  }

  const paths = findPaths();
  console.log(`You made it in ${paths.length - 1} moves! Here's your path:`);
  for (let i = 0; i < paths.length; i++) {
    console.log(paths[i]);
  }
}
