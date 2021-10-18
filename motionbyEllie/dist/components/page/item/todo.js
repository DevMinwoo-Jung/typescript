import { BaseComponent } from './../../component.js';
export class TodoComponet extends BaseComponent {
    constructor(title, todo) {
        super(`<section class="todo">
          <h2 class="todo__title"></h2>
          <input type="checkbox" class="todo-checkbox">
        </section>`);
        const titleElement = this.element.querySelector('.todo__title');
        titleElement.textContent = title;
        const bodyElement = this.element.querySelector('.todo-checkbox');
        bodyElement.insertAdjacentText('afterend', todo);
    }
}
