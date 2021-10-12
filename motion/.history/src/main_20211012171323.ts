

console.log("시발");

function closeBtn():void{
  document.querySelector('.closeBtn__box')
  ?.addEventListener("click", () => {
    alert("안녕");
  })
}

closeBtn();

function exmaple():void{
  alert("야호호");
}

exmaple();