import { ITask } from './task';

/**
 * Task list is collection of corresponding list's tasks.
 */
export interface ITaskList {
  _id?: string;
  name: string;
  tasks?: Array<ITask>;
}
