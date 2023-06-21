import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Todosservice } from '../../services/todo.service';
import { Todo } from "../../interfaces/todo.interface";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit{

  constructor(public todoService: Todosservice) {}

  ngOnInit(): void {

  }

  onChange(id: number) {
    this.todoService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
  }

  @Input() todo!: Todo;
  
  @Input() index!: number;
}
