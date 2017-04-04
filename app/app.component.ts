import {Component} from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    private todo = new Todo();
    private todoList: any = [];
    private lastId:number = 0;

    addTodo(todo: Todo) {
        if (!todo.id && todo.item) {
            todo.id = this.lastId++;
            this.todoList.reverse();
            this.todoList.push(todo);
            this.todoList.reverse();
        }
        this.todo = new Todo();
    }

    deleteTodo(id: number) {
        this.todoList = this.todoList.filter(todo => todo.id != id);
    }
}

export class Todo {
    public id: number;
    public item: string;
    public isDone: boolean = false;
}