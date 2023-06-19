import { Injectable } from "@angular/core";

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: Date
}

@Injectable({providedIn: 'root'})
export class Todosservice {

  title: string = ''

  public todos: Todo[] = [
    {id: 1, title: 'изучить Angular', completed: false, date: new Date()},
    {id: 2, title: 'изучить React', completed: true, date: new Date()},
    {id: 3, title: 'изучить Redux', completed: false, date: new Date()},
  ]

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
