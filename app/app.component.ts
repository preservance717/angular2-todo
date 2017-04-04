import {Component} from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    private todo = new Todo();
    private todoList: any = [];
    private leftTodoList: any = [];
    private lastId:number = 0;

    addTodo(todo: Todo) {
        if (!todo.id && todo.item) {
            todo.id = this.lastId++;
            this.todoList.reverse();
            this.todoList.push(todo);
            this.todoList.reverse();
        }
        this.leftTodoList = this.todoList;
        this.todo = new Todo();
    }

    deleteTodo(id: number) {
        this.todoList = this.todoList.filter(todo => todo.id != id);

        this.leftTodoList = this.leftTodo(this.todoList);
    }

    toggle(todo:Todo){
        todo.isDone = !todo.isDone;
        this.todoList[this.todoList.indexOf(todo)].isDone = todo.isDone;

        this.leftTodoList = this.leftTodo(this.todoList);
    }

    leftTodo(todoList:any){
        let todos = [];

        todoList.forEach((todo) => {
            if (!todo.isDone) {
                todos.push(todo);
            }
        });

        return todos;
    }
}

export class Todo {
    public id: number;
    public item: string;
    public isDone: boolean = false;
}