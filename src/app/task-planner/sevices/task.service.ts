import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { TaskList } from "../modal/task-list";
import { Task } from "../modal/task";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=UTF-8",
  }),
};

@Injectable()
export class TaskService {
  private taskListUrl: string = "http://localhost:3000/tasks-list";

  constructor(private http: HttpClient) {}

  get(taskListId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.taskListUrl}\/${taskListId}\/tasks`);
  }

  post(taskListId: string, task: Task): Observable<TaskList> {
    return this.http.post<TaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks`,
      task,
      httpOptions
    );
  }

  put(taskListId: string, task: Task): Observable<TaskList> {
    return this.http.put<TaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks\/${task._id}`,
      task,
      httpOptions
    );
  }

  delete(taskListId: string, task: Task): Observable<TaskList> {
    return this.http.delete<TaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks\/${task._id}`,
      httpOptions
    );
  }
}
