

export  class Close{
  btnBox: NodeListOf<Element>;
  btn: NodeListOf<Element>;

  constructor(){
    this.btnBox = document.querySelectorAll('.closeBtn__box');
    this.btn = document.querySelectorAll('.closeBtn');
  }

  closeContents(){
    document.addEventListener('click', (event) => {
      const btn = (<Element>event.target);
      const content = (<Element>(btn).parentNode?.parentNode).className;
      if(btn.className == 'closeBtn__box'){
        document.querySelector(`.${content}`)?.remove();
      }
    })
  }

  closeInputs(){
    for(const button of this.btn){
      button.addEventListener('click', () => {
          const toggleAdd = button.parentElement?.parentElement?.className;
          document.querySelector(`.${toggleAdd}`)?.setAttribute("style", "display: none");
        }
      )}
  }

}