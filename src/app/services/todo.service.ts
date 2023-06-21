import { Injectable } from "@angular/core";
import { Todo, Todos } from "../interfaces/todo.interface";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class Todosservice {

  title: string = ''

  private todos: Todo[] = [
    {id: 1, title: 'изучить Angular', completed: false, date: "17.05.2023"},
    {id: 2, title: 'изучить React', completed: true, date: "17.05.2023"},
    {id: 3, title: 'изучить Redux', completed: false, date: "17.05.2023"},
  ]

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      if (!this.todos.length) {
        data.forEach((element: Todo) => {
          this.todos.push(element)
        });
      }

    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/todo-list.json");
  }


  getList() {
    return this.todos
  }

  onToggle(id:number) {
    const index = this.todos.findIndex(t => t.id === id)
    this.todos[index].completed = !this.todos[index].completed
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
}
