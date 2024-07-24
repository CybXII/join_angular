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

  logoAnimation = true;
  constructor(private as:AuthService, private router: Router) {
    this.move();
    this.router.navigate(['login']);
  }

  move() {
    if (this.logoAnimation) {
    setTimeout(() => {
      this.logoAnimation = false;
    }, 1000);
    }
  }
}
