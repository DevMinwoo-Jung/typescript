

console.log("시발");

function closeBtn():void{
  document.querySelector('.closeBtn__box')
  ?.addEventListener('click', () => {
    alert("안녕");
  })
}

closeBtn();
