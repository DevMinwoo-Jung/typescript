

console.log("시발");

function closeBtn():void{
  document.querySelector('.closeBtn__box')
  ?.addEventListener("click", ():void => {
    alert("안녕");
  })
}

closeBtn();
