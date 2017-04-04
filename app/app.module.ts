import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AddTodoComponent} from "./components/add_todo/add-todo.component";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, AddTodoComponent, FooterComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}