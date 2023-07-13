import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {
  baseUrl: string = `${environment.backendOrigin}/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string | null, password: string | null) {
    console.log('email=', email, ' / ','password=', password);

    return this.http
    .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
    .subscribe((res: any) => {
      localStorage.setItem('del_auth_token', res.token);
      this.router.navigate(['todos']);
    })
  }

  logout() {
    localStorage.removeItem('del_auth_token');
    this.router.navigate(['login']);
  }

  isAuth() {
    if (localStorage.getItem('del_auth_token')) {
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('del_auth_token')
  }


  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user(): User | null {
    const token = localStorage.getItem('del_auth_token');
    if (token) {
      const user: User = this.parseJwt(token);
      return user;
    } else return null;
  }

  public get token(): string | null {
    return localStorage.getItem('del_auth_token');
  }

}
