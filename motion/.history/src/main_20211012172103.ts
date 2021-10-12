

console.log("시발");

function closeBtn():void{
  const btn = document.querySelector('.closeBtn__box');
  btn?.addEventListener("click", closeBtnBox);
}

function closeBtnBox(this: HTMLElement, ev:Event){
  ev.preventDefault();
  alert("하이");
}

closeBtn();
