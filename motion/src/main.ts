import { Close } from './close.js';
import { Add } from './add.js';


window.onload = () => {
  const closeClass = new Close();
  const addClass = new Add();

  closeClass.closeContents();
  closeClass.closeInputs();
  addClass.checkInputType();

  const addItem = document.querySelectorAll('.category');

  
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
