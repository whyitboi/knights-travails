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
  if (
    !Number.isInteger(start[0]) ||
    !Number.isInteger(start[1]) ||
    !Number.isInteger(end[0]) ||
    !Number.isInteger(end[1])
  ) {
    throw new Error(
      "Start and End must be arrays. Each with 2 integers. E.g [1,2]",
    );
  }

  function viableSquares(currentSquare) {
    const moves = [];
    for (const jump of jumps) {
      const newX = currentSquare[0] + jump[0];
      const newY = currentSquare[1] + jump[1];

      if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
        moves.push([newX, newY]);
      } else {
        throw new Error("Square must be between 0-7");
      }
    }
    return moves;
  }

  function findPaths() {
    const queue = [[start]];
    //create a set to track already visted squares
    const visited = new Set([`${start[0]}, ${start[1]}`]);

    while (queue.length > 0) {
      const path = queue.shift();
      //set current to the last square in the path
      const currentSquare = path[path.length - 1];

      if (currentSquare[0] === end[0] && currentSquare[1] === end[1])
        return path;
      else {
        for (const square of viableSquares(currentSquare)) {
          const key = `${square[0]}, ${square[1]}`;
          if (!visited.has(key)) {
            visited.add(key);
            queue.push([...path, square]);
          }
        }
      }
    }
  }

  return findPaths();
}
