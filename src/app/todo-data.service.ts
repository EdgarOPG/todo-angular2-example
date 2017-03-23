import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';

@Injectable()
export class TodoDataService {

  lastId: number = 0;

  todos: Todo[] = [];
  constructor() { }

//In this case colon mean equals, therefore
// the function addTodo returns a updated instance of TodoDataService
  addTodo(todo: Todo): TodoDataService {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  //filter returns all todos that NOT match with the id passed on params
  deleteTodoById(id: number): TodoDataService{
// Arrow function return itself one time than is modified by the condition
// and filter is a javascript function that require a param function to returns something
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[]{
    return this.todos;
  }

//filter returns all todos that match with the id passed on params
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

//this type of function is equivalent to a void function
  toggleTodoComplete(todo: Todo){
      let updatedTodo = this.updateTodoById(todo.id, {
        complete: !todo.complete
      });
      return updatedTodo;
  }
}
