

export  class CloseBtn{
  
  closeBtn():void{
    document.querySelector('.closeBtn__box')
    ?.addEventListener('click', () => {
      alert("안녕");
    })
  }
  
}
