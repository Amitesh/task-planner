import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { TaskList } from "../modal/task-list";
import { Task } from "../modal/task";

/**
 * Hearder option for http request to set the key-values into header
 */
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=UTF-8",
  }),
};

@Injectable()
export class TaskService {
  // TaskList resource api end point. It can be put in a constant config file.
  // private taskListUrl: string = "http://localhost:3000/tasks-list";
  private taskListUrl: string = "/tasks-list";

  constructor(private http: HttpClient) {}

  /**
   * API service method to get the all tasks of given tasklist id
   * @param taskListId 
   */
  get(taskListId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.taskListUrl}\/${taskListId}\/tasks`);
  }

  /**
   * API service method to add a new task under the given task list id.
   * @param taskListId 
   * @param task 
   */
  post(taskListId: string, task: Task): Observable<TaskList> {
    return this.http.post<TaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks`,
      task,
      httpOptions
    );
  }

  /**
   * API service method to update the task details of given task id and it's task list id.
   * @param taskListId 
   * @param task 
   */
  put(taskListId: string, task: Task): Observable<TaskList> {
    return this.http.put<TaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks\/${task._id}`,
      task,
      httpOptions
    );
  }

  /**
   * API service method to delete a task from a task list.
   * @param taskListId 
   * @param task 
   */
  delete(taskListId: string, task: Task): Observable<TaskList> {
    return this.http.delete<TaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks\/${task._id}`,
      httpOptions
    );
  }
}
