import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BoardComponent } from '../board/board.component';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,BoardComponent,RouterLink,MatIconModule,RouterLinkActive,MatCardModule,SidebarComponent,MatSidenavModule,MatButtonModule, MatToolbar],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router: Router) {
    this.router.navigate(['main/board']);
  }
}
