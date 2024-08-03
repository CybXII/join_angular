import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import {MatCardModule} from '@angular/material/card';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,LoginFormComponent,MainComponent, MatCardModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
