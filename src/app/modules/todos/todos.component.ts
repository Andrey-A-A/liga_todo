import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Todosservice } from '../../services/todo.service';
import { Todo } from "../../interfaces/todo.interface";
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TodosComponent implements OnInit {

  public searchString: string = ''

  public todos: Todo[] = []

  title: string = ''

  public isLoading: boolean = true

  constructor(public todoService: Todosservice) {}

  sleep(ms = 1000) {
    const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
  }

  ngOnInit() {

    this.todos = this.todoService.getList()
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
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
