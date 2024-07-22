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
  logoAnimation = true;
  constructor(private as:AuthService, private router: Router) {
    this.move();
  }

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

  move() {
    setTimeout(() => {
      this.logoAnimation = false;
      // this.("logo_container").classList.remove("background");
      // document.getElementById("join_logo").classList.remove("background");
      // document.getElementById("join_logo2").classList.remove("background");
      // document.getElementById("logo_container").classList.remove("big_size");
      // document
      //   .getElementById("join_logo2")
      //   .classList.remove("join_logo_start_responsiv");
      // document
      //   .getElementById("join_logo2")
      //   .classList.add("join_logo_start_responsiv2");
    }, 1000);
  }
}
