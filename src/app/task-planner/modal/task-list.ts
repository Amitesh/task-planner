import { Task } from "./task";

/**
 * Task list is collection of corresponding list's tasks.
 */
export interface TaskList {
  _id?: string;
  name: string;
  tasks?: Array<Task>;
}