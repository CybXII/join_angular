import { ChangeDetectionStrategy, Component, computed, inject, model, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatAutocompleteModule,MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  todayDate: Date = new Date();
  readonly categorys: string[] = ['Urgent', 'Medium', 'Low'];
  contacts = new FormControl('');
  contactsList: string[] = ['Alex', 'Lukas', 'Marcel,', 'Johannes'];

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentSubtask = model('');
  readonly subtasks = signal(['Lemon','Lemon','Lemon']);
  readonly allSubtasks: string[] = [];

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.subtasks.update(subtasks => [...subtasks, value]);
    }

    // Clear the input value
    this.currentSubtask.set('');
  }

  remove(subtask: string): void {
    this.subtasks.update(subtasks => {
      const index = subtasks.indexOf(subtask);
      if (index < 0) {
        return subtasks;
      }

      subtasks.splice(index, 1);
      this.announcer.announce(`Removed ${subtask}`);
      return [...subtasks];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.subtasks.update(subtasks => [...subtasks, event.option.viewValue]);
    this.currentSubtask.set('');
    event.option.deselect();
  }

}
