import { Component, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Todosservice } from '../../services/todo.service';
import { Todo } from "../../interfaces/todo.interface";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit, OnChanges {

  public searchString: string = ''

  todos: Todo[] = []

  title: string = ''

  constructor(public todoService: Todosservice) {

  }

  sleep(ms = 1000) {
    const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {  console.log("World!"); }, 2000);
  }

  ngOnInit(): void {

  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date().toLocaleDateString("ru-RU")
    }

    this.todoService.addTodo(todo)
    this.title = ''
  }

}
