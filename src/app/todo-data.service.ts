import { Injectable } from '@angular/core';
import { Todo } from './todo';

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
    this.todos = this.todos
      .filter(todo => todo.id !== id);
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

//this type of function is equivalent to void functions
  toggleTodoComplete(todo: Todo){
      let updatedTodo = this.updateTodoById(todo.id, {
        complete: !todo.complete
      });
      return updatedTodo;
  }
}
