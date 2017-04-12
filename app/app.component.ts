import {Component} from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    private todo = new Todo();
    private todoList: any = [];
    private leftTodoList: any = [];
    private viewTodoList: any = [];
    private lastId: number = 0;

    addTodo(todo: Todo) {
        if (!todo.id && todo.item) {
            todo.id = this.lastId++;
            this.todoList.reverse();
            this.todoList.push(todo);
            this.todoList.reverse();
        }
        this.viewTodoList = this.leftTodoList = this.todoList;
        this.todo = new Todo();
    }

    deleteTodo(id: number) {
        this.viewTodoList = this.todoList = this.todoList.filter(todo => todo.id != id);
        this.leftTodoList = this.leftTodo(this.todoList, false);
    }

    toggle(todo: Todo) {
        todo.isDone = !todo.isDone;
        this.todoList[this.todoList.indexOf(todo)].isDone = todo.isDone;
        this.leftTodoList = this.leftTodo(this.todoList, false);
    }

    leftTodo(todoList: any, isDone:boolean) {
        let todos = [];

        todoList.forEach((todo) => {
            if (todo.isDone == isDone) {
                todos.push(todo);
            }
        });

        return todos;
    }

    getTodos(status: string) {
        if (status === 'ALL') {
            this.viewTodoList = this.todoList;
        } else if (status === 'ACTIVE') {
            this.viewTodoList = this.todoList.filter(todo => todo.isDone === false);
        } else if (status === 'COMPLETE') {
            this.viewTodoList = this.todoList.filter(todo => todo.isDone === true);
        }
    }

    clearComplete() {
        this.todoList = this.todoList.filter(todo => todo.isDone === false);
        this.viewTodoList = this.todoList;
    }
}

export class Todo {
    public id: number;
    public item: string;
    public isDone: boolean = false;
}