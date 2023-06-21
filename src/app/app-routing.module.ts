import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AboutComponent } from './pages/auth/about/about.component';
import { AboutGuard } from './shared/guards/about.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { TodosComponent } from './modules/todos/todos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
