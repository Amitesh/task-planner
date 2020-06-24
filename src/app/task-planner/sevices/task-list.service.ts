
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from 'src/app/services/environment.service';
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
export class TaskListService {
  // TaskList resource api end point. It can be put in a constant config file.
  public taskListUrl;

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
  ) {
    this.taskListUrl = this.environmentService.apiUrl;
  }

  /**
   * API service method to get the all task list and it's tasks.
   */
  public get(): Observable<ITaskList[]> {
    return this.http.get<ITaskList[]>(`${this.taskListUrl}`);
  }

  /**
   * API service method to add new task
   * @param taskList : TaskList object
   */
  public post(taskList: ITaskList): Observable<ITaskList[]> {
    return this.http.post<ITaskList[]>(this.taskListUrl, taskList, httpOptions);
  }

  /**
   * API service method to update the tasklist
   * @param taskList : TaskList object
   */
  public put(taskList: ITaskList): Observable<ITaskList[]> {
    return this.http.put<ITaskList[]>(this.taskListUrl, taskList, httpOptions);
  }

  /**
   * API service method to delete a task list for given id
   * @param taskList : TaskList object
   */
  public delete(taskList: ITaskList): Observable<ITaskList[]> {
    return this.http.delete<ITaskList[]>(
      `${this.taskListUrl}/${taskList._id}`,
      httpOptions,
    );
  }
}
