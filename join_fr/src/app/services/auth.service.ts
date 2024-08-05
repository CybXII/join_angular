import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject  } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logoAnimation = true;
  private currentPathSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentPath$: Observable<string> = this.currentPathSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) { 
    // Auf Routenänderungen hören
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getCurrentURL();
      }
    });
    this.getCurrentURL(); // Initialisiere den Pfad
  }
  disableAnimation() {
    this.logoAnimation = false;
  }

  getCurrentURL() {
    this.currentPathSubject.next(this.router.url.replace('/', ''));
    console.log(this.currentPathSubject.value);
  }
  
  loginWithEmailAndPassword(email: string, password: string ,remember: boolean): Observable<any> {
    return this.http.post<any>(environment.baseURL + '/login/', { email, password,remember });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
