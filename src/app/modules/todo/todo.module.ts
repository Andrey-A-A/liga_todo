import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import {  } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TodosFilterPipe} from '../../services/todo-filter.pipe'

@NgModule({
  declarations: [
    TodoComponent,
    TodosFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoComponent
  ],
})
export class TodoModule { }
