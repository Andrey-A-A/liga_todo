import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo, Todos } from '../app/interfaces/todo.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'приложение todo Angular';
  
  ngOnInit(){}
}
