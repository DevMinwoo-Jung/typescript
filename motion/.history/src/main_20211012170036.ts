import {CloseBtn} from './close';

console.log("시발");
const ex = new CloseBtn();

function closeBtn():void{
  document.querySelector('.closeBtn__box')
  ?.addEventListener('click', () => {
    alert("안녕");
  })
}

closeBtn();