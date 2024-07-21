import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private as:AuthService, private router: Router) {}

  ngOnInit(): void {}

  async login() {
    try {
      const response = await lastValueFrom(this.as.loginWithEmailAndPassword(this.username, this.password));
      await console.log(response);
      this.as.setToken(response.token);
      this.router.navigate(['/board']);
    } catch (error) {
      console.log(error);
    }
  }
}
