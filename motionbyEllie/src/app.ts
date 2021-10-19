
import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponet } from './components/page/item/note.js';
import { TodoComponet } from './components/page/item/todo.js';
import { VideoComponet } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/Page.js';

type InputComponentConstructor<T =  (MediaData | TextData) & Component> = {
  new (): T;
}

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly body: string;
}

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement){
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      '#new-image', 
      MediaSectionInput, 
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
      );
    
      this.bindElementToDialog<MediaSectionInput>(
        '#new-video', 
        MediaSectionInput, 
        (input: MediaSectionInput) => new VideoComponet(input.title, input.url)
        );    

      this.bindElementToDialog<TextSectionInput>(
        '#new-note', 
        TextSectionInput, 
        (input: TextSectionInput) => new NoteComponet(input.title, input.title)
        );   

      this.bindElementToDialog<TextSectionInput>(
        '#new-todo', 
        TextSectionInput, 
        (input: TextSectionInput) => new TodoComponet(input.title, input.title)
        );  


    // For demo :)
    this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
    this.page.addChild(new VideoComponet('Video Title', 'https://youtu.be/D7cwvvA7cP0'));
    this.page.addChild(new NoteComponet('Note Title', "Don't forget to code your dream"));
    this.page.addChild(new TodoComponet('Todo Title', 'TypeScript Course!'));
    this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
    this.page.addChild(new VideoComponet('Video Title', 'https://youtu.be/D7cwvvA7cP0'));
    this.page.addChild(new NoteComponet('Note Title', "Don't forget to code your dream"));
    this.page.addChild(new TodoComponet('Todo Title', 'TypeScript Course!'));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>
  (
    selector:string, 
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ){
    const imageBtn = document.querySelector(selector)! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가 해준다
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });

      dialog.attachTo(document.body);
    });
  }
}


new App(document.querySelector('.document')! as HTMLElement, document.body);