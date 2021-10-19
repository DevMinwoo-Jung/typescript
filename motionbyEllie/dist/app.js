import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponet } from './components/page/item/note.js';
import { TodoComponet } from './components/page/item/todo.js';
import { VideoComponet } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/Page.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('#new-video', MediaSectionInput, (input) => new VideoComponet(input.title, input.url));
        this.bindElementToDialog('#new-note', TextSectionInput, (input) => new NoteComponet(input.title, input.title));
        this.bindElementToDialog('#new-todo', TextSectionInput, (input) => new TodoComponet(input.title, input.title));
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponet('Video Title', 'https://youtu.be/D7cwvvA7cP0'));
        this.page.addChild(new NoteComponet('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TodoComponet('Todo Title', 'TypeScript Course!'));
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponet('Video Title', 'https://youtu.be/D7cwvvA7cP0'));
        this.page.addChild(new NoteComponet('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TodoComponet('Todo Title', 'TypeScript Course!'));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const imageBtn = document.querySelector(selector);
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.attachTo(document.body);
        });
    }
}
new App(document.querySelector('.document'), document.body);
