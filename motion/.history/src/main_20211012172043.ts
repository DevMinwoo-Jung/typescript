

console.log("시발");

export function closeBtn(){
  const btn = document.querySelector('.closeBtn__box');
  btn?.addEventListener("click", closeBtnBox);
}

function closeBtnBox(this: HTMLElement, ev:Event){
  ev.preventDefault();
  alert("하이");
}

closeBtn();
