

console.log("시발");

function closeBtn():void{
  document.querySelector('.closeBtn__box')
  ?.addEventListener("click", closeBtnBox)
}

function closeBtnBox():void{
  alert("하이");
}

closeBtn();
