import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  appTitle = 'Todo Angular'

  constructor(private authService: AuthService) {

  }

  public isAuthorised() {
    if (this.authService.getToken()) {
      return true
    } else return false
  }

  public LogOut() {
    this.authService.logout()
  }
}
