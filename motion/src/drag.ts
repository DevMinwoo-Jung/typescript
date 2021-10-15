export class Drag{
  
  drag(){
    document.addEventListener('click', (event) => {
      const dragDiv = (<Element>event.target);
      dragDiv.addEventListener('drag', () => {
        
      })
    })
  }
}