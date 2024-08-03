import { Component,ChangeDetectionStrategy,signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup-form',
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
    MatButtonModule,
    RouterLink,
    RouterLinkActive, 
    RouterOutlet],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordChecker: string = '';
  accepted = false;
  currentPath = '';
  constructor(private as:AuthService, private router: Router) {
    this.as.getCurrentURL();
    this.router.navigate(['signup']);
  }


  ngOnInit(): void {

    // Abonniere Änderungen des Pfads
    this.as.currentPath$.subscribe(path => {
      this.currentPath = path;
    });
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  checkhide = signal(true);
  clickEventcheck(event: MouseEvent) {
    this.checkhide.set(!this.checkhide());
    event.stopPropagation();
  }

  signup1() {
    console.log('signup1');
  }
}