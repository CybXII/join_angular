import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [MatCardModule,CdkDropList, CdkDrag],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{

  todos: any = [];

  progress = [
    '1Episode I - The Phantom Menace',
    '1Episode II - Attack of the Clones',
    '1Episode III - Revenge of the Sith',
    '1Episode IV - A New Hope',
    '1Episode V - The Empire Strikes Back',
    '1Episode VI - Return of the Jedi',
    '1Episode VII - The Force Awakens',
    '1Episode VIII - The Last Jedi',
    '1Episode IX – The Rise of Skywalker',
  ];

  done = [
    '2Episode I - The Phantom Menace',
    '2Episode II - Attack of the Clones',
    '2Episode III - Revenge of the Sith',
    '2Episode IV - A New Hope',
    '2Episode V - The Empire Strikes Back',
    '2Episode VI - Return of the Jedi',
    '2Episode VII - The Force Awakens',
    '2Episode VIII - The Last Jedi',
    '2Episode IX – The Rise of Skywalker',
  ];


  awaitFeedback = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];


  error = '';
  constructor(private http: HttpClient) { }

  async ngOnInit(){
    try {
    this.todos = await this.getTodos();
    console.log(this.todos);
  } catch (error) {
    this.error = 'Fehler beim Laden!';
  }
  }

  getTodos(){
    const url = environment.baseURL + '/main/';
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    return lastValueFrom(this.http.get(url,{
        headers: headers
      }));
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
