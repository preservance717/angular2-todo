import {Component, Input} from '@angular/core';

@Component({
    selector: 'foot',
    template: `<div *ngIf="todoList.length != 0">
               <span><strong>{{leftTodoList.length}}</strong>{{leftTodoList.length === 1 ? 'item' : 'items'}} left</span>
               </div>`
})

export class FooterComponent implements Input {
    @Input() todoList;
    @Input() leftTodoList;
}