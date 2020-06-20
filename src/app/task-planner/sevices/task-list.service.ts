import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { TaskList } from "../modal/task-list";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=UTF-8",
  }),
};

@Injectable()
export class TaskListService {
  private taskListUrl: string = "http://localhost:3000/tasks-list";

  constructor(private http: HttpClient) {}

  get(): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(`${this.taskListUrl}`);
  }

  post(taskList: TaskList): Observable<TaskList[]> {
    return this.http.post<TaskList[]>(this.taskListUrl, taskList, httpOptions);
  }

  put(taskList: TaskList): Observable<TaskList[]> {
    return this.http.put<TaskList[]>(this.taskListUrl, taskList, httpOptions);
  }

  delete(taskList: TaskList): Observable<TaskList[]> {
    return this.http.delete<TaskList[]>(
      `${this.taskListUrl}\\${taskList._id}`,
      httpOptions
    );
  }
}
