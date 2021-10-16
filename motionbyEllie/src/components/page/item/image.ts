import { BaseComponent } from './../../component.js';
export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string){
    super(`<section class="image">
            <div class="image__holder"><img class="image__thumbnail"></img></div>
            <p class="image__title"></p>
          </section>`);
  
    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src= url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;

    // 사용자에게 전달받은 데이터를 innerHtml로 박아버리는건 해킹 등의 위험이 있으므로 필요한것만 위처럼 업데이트 해준다.
  }

}