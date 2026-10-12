import { knightMoves } from "./knightMoves.js";

const paths = knightMoves([0, 0], [3, 3]);

console.log(`You made it in ${paths.length - 1} moves! Here's your path:`);
for (let i = 0; i < paths.length; i++) {
  console.log(paths[i]);
}
