/**
 * Let's make a game 🕹
 */

type Position = 'up' | 'down' | 'left' | 'right';
type Xy = {x:number, y:number};

let position: Xy = {x:0,y:0};
function move(target: Position): Xy {
  switch(target){
    case 'up':
      return {x: position.x, y: position.y++};
    case 'down':
      return {x: position.x, y: position.y--};
    case 'left':
      return {x: position.x--, y:position.y}; 
    case 'right':
      return {x: position.x++, y:position.y};   
    default:
      throw new Error(`unkonwn direction: ${position}`);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
