import { Task } from "./task";

export interface TaskList {
  name: string;
  tasks?: Array<Task>;
}