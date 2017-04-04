import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'add-todo',
    template: `<input type="checkbox">
               <input type="text" value="{{todo.item}}">
               <button (click)="deleteTodo(todo.id)">✘</button>`
})

export class AddTodoComponent implements Input {
    @Input() todo;
    @Output() onDelete = new EventEmitter();

    deleteTodo(id:number){
        this.onDelete.emit(id);
    }
}