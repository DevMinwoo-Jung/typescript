

console.log("시발");

export function closeBtn():void{
  document.querySelector('.closeBtn__box')
  ?.addEventListener("click", closeBtnBox)
}

function closeBtnBox(this: HTMLElement, ev:Event){
  ev.preventDefault();
  alert("하이");
}

closeBtn();
