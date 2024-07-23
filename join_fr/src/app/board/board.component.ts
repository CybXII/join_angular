import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{

  todos: any = [];
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
}
