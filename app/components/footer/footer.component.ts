import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'foot',
    template: `<div *ngIf="todoList.length != 0">
               <span><strong>{{leftTodoList.length}}</strong>{{leftTodoList.length === 1 ? 'item' : 'items'}} left</span>
               <button (click)="getTodos('ALL')">All</button>
               <button (click)="getTodos('ACTIVE')">Active</button>
               <button (click)="getTodos('COMPLETE')">Complete</button>
               </div>`
})

export class FooterComponent implements Input {
    @Input() todoList;
    @Input() leftTodoList;
    @Output() onGetTodos = new EventEmitter();

    getTodos(state: string) {
        this.onGetTodos.emit(state);
    }
}