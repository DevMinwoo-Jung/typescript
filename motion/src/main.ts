

window.onload = () => {
    const btnBox = document.querySelectorAll('.closeBtn__box');
    const btn = document.querySelectorAll('.closeBtn');
    const addItem = document.querySelectorAll('.category');
    
    for(const button of btnBox){
      button.addEventListener('click', () => {
          console.log(button.parentNode?.parentNode);
          button.parentNode?.parentNode?.parentNode?.removeChild(button.parentNode?.parentNode);
        }
      )}

      // 상자 지우기
      for(const button of btn){
        button.addEventListener('click', () => {
            const toggleAdd = button.parentElement?.parentElement?.className;
            document.querySelector(`.${toggleAdd}`)?.setAttribute("style", "display: none");
          }
        )}
  
      // 상자 열기
    for(const item of addItem){
      item.addEventListener('click', () => {
        switch(item.innerHTML){
          case 'Image':
            document.querySelector('.imgInput')?.setAttribute("style", "display: block");
            break;
          case 'Video':
            document.querySelector('.videoInput')?.setAttribute("style", "display: block");
            break;
          case 'Note':  
          document.querySelector('.noteInput')?.setAttribute("style", "display: block");
            break;
          case 'Task':
            document.querySelector('.taskInput')?.setAttribute("style", "display: block");
            break;
        }
      })
    }


  
}
