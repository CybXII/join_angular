import { Component,ChangeDetectionStrategy,signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [    
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  remember = false;
  logoAnimation = true;

  constructor(private as:AuthService, private router: Router) {
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  ngOnInit(): void {}

  async login() {
    try {
      const response = await lastValueFrom(this.as.loginWithEmailAndPassword(this.email, this.password ,this.remember));
      await console.log(response);
      this.as.setToken(response.token);
      await localStorage.setItem('remember', this.remember.toString());
      this.router.navigate(['main']);
    } catch (error) {
      console.log(error);
    }
  }
  async guestlogin() {
      this.email = 'guest';
      this.password = 'test_1234';
      this.login();
  }
}
