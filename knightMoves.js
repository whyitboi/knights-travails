export function knightMoves(start, end) {
  while (
    start.includes((value) => {
      if (value < 0 || value > 7) {
        throw new Error("The values must be within 0-7 in [x,y] format");
      }
    })
  ) {
    const viableMoves = [];

    //edges of the board have different restrictions
    //rows 0
    let move = [];
    if (start[0] === 0 && start[1] === 0) {
      move.push(start[0] + 2);
      move.push(start[1] + 1);
      viableMoves.push(move);

      //OR how do I write or for this?
      move.push(start[0] + 1);
      move.push(start[1] + 2);
      viableMoves.push(move);
    }
  }
}
