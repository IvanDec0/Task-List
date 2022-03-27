import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'
import {Task} from '../Task';
import {TASKS} from '../mock-task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
