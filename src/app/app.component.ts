import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

// No longer needed, now handled by TodoListHeaderComponent
  //newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

// No longer needed, now handled by TodoListHeaderComponent

//addTodo() {
//  this.todoDataService.addTodo(this.newTodo);
//  this.newTodo = new Todo();
//}

//toggleTodoComplete(todo: Todo) {
//  this.todoDataService.toggleTodoComplete(todo);
//}

//removeTodo(todo: Todo) {
//  this.todoDataService.deleteTodoById(todo.id);
//}

  // rename from addTodo
  onAddTodo(todo: Todo){
    this.todoDataService.addTodo(todo);
  }

  // rename from toggleTodoComplete
  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  // rename from removeTodo
  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
