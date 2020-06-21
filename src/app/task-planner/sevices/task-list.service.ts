import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { TaskList } from "../modal/task-list";

/**
 * Hearder option for http request to set the key-values into header
 */
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=UTF-8",
  }),
};

@Injectable()
export class TaskListService {
  // TaskList resource api end point. It can be put in a constant config file.
  private taskListUrl: string = "http://localhost:3000/tasks-list";
  // private taskListUrl: string = "/tasks-list";

  constructor(private http: HttpClient) {}

  /**
   * API service method to get the all task list and it's tasks.
   */
  get(): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(`${this.taskListUrl}`);
  }
  /**
   * API service method to add new task
   * @param taskList 
   */
  post(taskList: TaskList): Observable<TaskList[]> {
    return this.http.post<TaskList[]>(this.taskListUrl, taskList, httpOptions);
  }

  /**
   * API service method to update the tasklist
   * @param taskList 
   */
  put(taskList: TaskList): Observable<TaskList[]> {
    return this.http.put<TaskList[]>(this.taskListUrl, taskList, httpOptions);
  }

  /**
   * API service method to delete a task list for given id
   * @param taskList 
   */
  delete(taskList: TaskList): Observable<TaskList[]> {
    return this.http.delete<TaskList[]>(
      `${this.taskListUrl}\\${taskList._id}`,
      httpOptions
    );
  }
}
