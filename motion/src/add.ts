export class Add{
  addBtns: NodeListOf<Element>;


  constructor(){
    this.addBtns = document.querySelectorAll('.addBtn');
  }

  checkInputType(){
    for(const addBtn of this.addBtns){
      addBtn.addEventListener('click', () => {
        switch (addBtn.parentElement?.parentElement?.className) {
          case 'imgInput':
            this.addImg();
            break;
          case 'videoInput':
            this.addVideo();
            break;
          case 'noteInput':
            this.addNote();
            break;
          case 'taskInput':
            this.addTask();
            break;                
        }
      })
    }
  }

  private addImg(){
    const imgUrl = (<HTMLInputElement>document.querySelector('.img__url')).value;
    const imgTitle = (<HTMLInputElement>document.querySelector('.img__title')).value;
      const contentsDiv = document.querySelector('.contents');
      contentsDiv?.insertAdjacentHTML('beforeend', 
      `<div class="img__div">
        <img class="img" src=${imgUrl} alt="">
        <div class="text__div">
          <p class="text">${imgTitle}</p>
          <button class="closeBtn__box">x</button>
        </div>
      </div>`);
  }

  private addVideo(){
    const videoUrl = (<HTMLInputElement>document.querySelector('.video__url')).value;
    const videoTitle = (<HTMLInputElement>document.querySelector('.video__title')).value;
      const contentsDiv = document.querySelector('.contents');
      contentsDiv?.insertAdjacentHTML('beforeend', 
      `<div class="video__box">
        <iframe class="vidoe" src=${videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="text__div">
          <p class="text">${videoTitle}</p>
          <button class="closeBtn__box">x</button>
        </div>
      </div>`);
  }

  private addNote(){
    const noteTitle = (<HTMLInputElement>document.querySelector('.note__title')).value;
    const noteInput = (<HTMLInputElement>document.querySelector('.note__input')).value;
      const contentsDiv = document.querySelector('.contents');
      contentsDiv?.insertAdjacentHTML('beforeend', 
      `<div class="note__box">
        <div class="text__box">
          <p>${noteTitle}</p>
          <p>${noteInput}</p>
          <button class="closeBtn__box">x</button>
        </div>
      </div> `);
  }

  private addTask(){
    const taskTitle = (<HTMLInputElement>document.querySelector('.task__title')).value;
    const taskInput = (<HTMLInputElement>document.querySelector('.task__input')).value;
      const contentsDiv = document.querySelector('.contents');
      contentsDiv?.insertAdjacentHTML('beforeend', 
      `<div class="task__box">
        <div class="text__box">
          <p>${taskTitle}</p>
          <ul>${taskInput}</ul>
          <button class="closeBtn__box">x</button>
        </div>
      </div>`);
  }

}