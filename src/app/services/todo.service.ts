import { Injectable } from "@angular/core";
import { Todo } from "../interfaces/todo.interface";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const PASSWORD = ['qwertY12']
@Injectable({providedIn: 'root'})
export class Todosservice {

  title: string = ''

  private todos: Todo[] = []

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      if (!this.todos.length) {
        data.forEach((element: Todo) => {
          this.todos.push(element)
        });
      }

    });
  }

  public getJSON(): Observable<Todo[]> {
    let obj = this.http.get<Todo[]>("assets/todo-list.json");
      return obj;
  }

  isExistsPassword(pass: string): Observable<boolean> {
    const isTaken = PASSWORD.includes(pass);

    return of(isTaken).pipe(delay(2000));
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
