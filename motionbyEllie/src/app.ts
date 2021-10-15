import { PageComponent } from './Page.js';
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement){
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}


new App(<HTMLElement>document.querySelector('.document'));