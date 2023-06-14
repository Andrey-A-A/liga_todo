import { Component, OnInit } from '@angular/core';
import { Todosservice } from '../../services/todo.service';
import { Todo } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  title: string = ''

  constructor(public todoService: Todosservice) {}

  ngOnInit(): void {

  }

  onChange(id: number) {
    this.todoService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }

    this.todoService.addTodo(todo)
  }
}
