import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Todo} from "../../app.component";

@Component({
    selector: 'add-todo',
    // template: `<input type="checkbox" checked="{{todo.isDone ? 'checked':''}}" (click)="toggle(todo)">
    //            <input type="text" value="{{todo.item}}">
    //            <button (click)="deleteTodo(todo.id)">✘</button>`
    template:`<div *ngFor="let todo of todos">
<input type="checkbox" checked="{{todo.isDone ? 'checked':''}}" (click)="toggle(todo)">
<span>{{todo.item}}</span>
<button (click)="deleteTodo(todo.id)">✘</button>
</div>`
})

export class AddTodoComponent implements Input, OnChanges{
    // @Input() todo;
    @Input() todos;
    @Output() onDelete = new EventEmitter();
    @Output() onToggle = new EventEmitter();

    ngOnChanges(){
        console.log('change');
    }

    deleteTodo(id:number){
        this.onDelete.emit(id);
    }

    toggle(todo:Todo){
        this.onToggle.emit(todo);
    }
}