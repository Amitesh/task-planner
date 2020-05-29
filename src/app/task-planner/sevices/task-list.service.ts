import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TaskList } from '../modal/task-list';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable()
export class TaskListService {
  private taskListUrl: string ='https://my-json-server.typicode.com/Amitesh/task-planner/data?12';

  constructor(
    private http: HttpClient,
  ) { }

  // getPost(id: number): Observable<PostModel> {
  //   return this.http.get<PostModel>(`${this.postsUrl}/${id}`)
  // }

  get(): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(`${this.taskListUrl}`)
  }

  post(taskList: TaskList): Observable<TaskList> {
    return this.http.post<TaskList>(this.taskListUrl, taskList, httpOptions) 
  }

  put(taskLists: TaskList[]): Observable<TaskList[]> {
    return this.http.put<TaskList[]>(this.taskListUrl, taskLists, httpOptions) 
  }

}