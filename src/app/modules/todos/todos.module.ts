import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoComponent } from '../todo/todo.component';
import { TodosFilterPipe} from '../../services/todo-filter.pipe'
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodosFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SpinnerModule
  ],
  exports: [
    TodosComponent,
  ]
})
export class TodosModule { }
