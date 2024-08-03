import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,LoginFormComponent,MatCardModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  animation: boolean;
  currentPath: string;
  
  constructor(private as:AuthService, private router: Router) {
    this.animation= this.as.logoAnimation;
    this.as.getCurrentURL();
    this. currentPath ='';
    this.move();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    // Abonniere Änderungen des Pfads
    this.as.currentPath$.subscribe(path => {
      this.currentPath = path;
    });
  }

  move() {
    if (this.animation) {
      setTimeout(() => {
        this.as.disableAnimation();
        this.animation= this.as.logoAnimation;
      }, 1000);
    }
  }
}
