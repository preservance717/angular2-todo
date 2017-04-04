import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../app.component";

@Component({
    selector: 'add-todo',
    template: `<input type="checkbox" checked="{{todo.isDone ? 'checked':''}}" (click)="toggle(todo)">
               <input type="text" value="{{todo.item}}">
               <button (click)="deleteTodo(todo.id)">✘</button>`
})

export class AddTodoComponent implements Input {
    @Input() todo;
    @Output() onDelete = new EventEmitter();
    @Output() onToggle = new EventEmitter();

    deleteTodo(id:number){
        this.onDelete.emit(id);
    }

    toggle(todo:Todo){
        this.onToggle.emit(todo);
    }
}