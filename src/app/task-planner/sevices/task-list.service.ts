
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from 'src/app/services/environment.service';
import { IMoveEvent } from '../modal/moveevent';
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
  public taskListUrl: string;

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
    return this.http.put<ITaskList[]>(`${this.taskListUrl}/${taskList._id}`, taskList, httpOptions);
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

  /**
   * Method to move the dragged item to back to original list if there is any error.
   * @param taskLists: Object
   * @param event: Object
   */
  public move(taskLists: ITaskList[], event: IMoveEvent) {
    const fromTaskList = (taskLists || []).find((taskList) => {
      return taskList._id === event.fromTaskListId;
    });

    const toTaskList = (taskLists || []).find((taskList) => {
      return taskList._id === event.toTaskListId;
    });

    const task = ((toTaskList && toTaskList.tasks) || []).find((item) => {
      return item._id === event.taskId;
    });

    if (task) {
      // Revove the task from new list
      toTaskList.tasks.splice(event.newIndex, 1);
      // Add task to old list
      fromTaskList.tasks.splice(event.oldIndex, 0, task);
    }
  }
}
