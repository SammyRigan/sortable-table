import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/models';

const API_URL = 'https://jsonplaceholder.typicode.com//users/1/todos';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(API_URL);
  }
}
