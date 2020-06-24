import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from 'src/app/services/environment.service';
import { ITask } from '../modal/task';
import { ITaskList } from '../modal/task-list';

/**
 * Hearder option for http request to set the key-values into header
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  }),
};

@Injectable()
export class TaskService {
  // TaskList resource api end point. It can be put in a constant config file.
  // public taskListUrl = 'http://localhost:3000/tasks-list';
  public taskListUrl;

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
  ) {
    this.taskListUrl = this.environmentService.apiUrl;
  }

  /**
   * API service method to get the all tasks of given tasklist id
   * @param taskListId  : TaskList id
   */
  public get(taskListId: string): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.taskListUrl}\/${taskListId}\/tasks`);
  }

  /**
   * API service method to add a new task under the given task list id.
   * @param taskListId  : TaskList id
   * @param task  : ITask
   */
  public post(taskListId: string, task: ITask): Observable<ITaskList> {
    return this.http.post<ITaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks`,
      task,
      httpOptions,
    );
  }

  /**
   * API service method to update the task details of given task id and it's task list id.
   * @param taskListId  : TaskList id
   * @param task  : ITask
   */
  public put(taskListId: string, task: ITask): Observable<ITaskList> {
    return this.http.put<ITaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks\/${task._id}`,
      task,
      httpOptions,
    );
  }

  /**
   * API service method to delete a task from a task list.
   * @param taskListId  : TaskList id
   * @param task  : ITask
   */
  public delete(taskListId: string, task: ITask): Observable<ITaskList> {
    return this.http.delete<ITaskList>(
      `${this.taskListUrl}\/${taskListId}\/tasks\/${task._id}`,
      httpOptions,
    );
  }
}
