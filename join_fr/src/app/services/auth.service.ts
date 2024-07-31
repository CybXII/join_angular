import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logoAnimation = true;
  public currentPath = '';
  constructor(private http: HttpClient ) { 
    this.getCurrentURL();
  }
  disableAnimation() {
    this.logoAnimation = false;
  }

  getCurrentURL(){
    this.currentPath=window.location.hash.replace(/#\//g, '')
    console.log(this.currentPath);
  }
  
  loginWithEmailAndPassword(username: string, password: string ,remember: boolean): Observable<any> {
    return this.http.post<any>(environment.baseURL + '/login/', { username, password,remember });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
