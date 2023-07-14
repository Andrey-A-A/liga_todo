import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AboutComponent } from './pages/auth/about/about.component';
import { AboutGuard } from './shared/guards/about.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { TodosComponent } from './modules/todos/todos.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AboutGuard],
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
