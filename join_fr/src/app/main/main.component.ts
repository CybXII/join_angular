import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BoardComponent } from '../board/board.component';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,BoardComponent,RouterLink, RouterLinkActive,MatCardModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router: Router) {
    this.router.navigate(['main/board']);
  }
}
