import {Component} from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    private todo = new Todo();
    private todoList: any = [];

    addTodo(todo: Todo) {
        if (todo.item) {
            this.todoList.reverse();
            this.todoList.push(todo);
            this.todoList.reverse();
        }
        this.todo = new Todo();
    }
}

export class Todo {
    public id: number;
    public item: string;
    public isDone: boolean = false;
}