import {Component, Input} from '@angular/core';

@Component({
    selector: 'add-todo',
    template: `<input type="checkbox"><input type="text" value="{{todo.item}}">`
})

export class AddTodoComponent implements Input {
    @Input() todo;
}