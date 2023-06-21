import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoComponent } from '../todo/todo.component';
import { TodosFilterPipe} from '../../services/todo-filter.pipe'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodosFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodosComponent,
  ]
})
export class TodosModule { }
