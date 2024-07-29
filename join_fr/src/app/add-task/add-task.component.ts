import {ChangeDetectionStrategy,Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {

}
