import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'sortablejs';

import { ConfirmDialogComponent } from '../dialogs/confirm-dialogs/confirm-dialog.component';
import { InputDialogComponent } from '../dialogs/input-dialogs/input-dialog.component';
import { IMoveEvent } from '../modal/moveevent';
import { ITask } from '../modal/task';
import { ITaskList } from '../modal/task-list';
import { TaskService } from '../sevices/task.service';

/**
 * Task component to render the individual task
 */
@Component({
  selector: 'task-list',
  styleUrls: ['./task-list.component.scss'],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  // Task list to hold the all tasks and it's properties
  @Input() public taskList: ITaskList;
  @Output() public errorOnMove = new EventEmitter<IMoveEvent>();

  public tasks: ITask[];

  /**
   * Set Sortablejs configuration for group name and callbacks
   */
  public sortableOptions: Options = {
    group: 'task-planner-group',
    onAdd: (event: any) => {
      this.onAddTaskByDragAndDrop(event);
    },
    onRemove: (event: any) => {
      this.onRemoveTaskByDragAndDrop(event);
    },
  };

  constructor(
    public dialogService: NgbModal,
    private taskService: TaskService,
  ) { }

  public ngOnInit() {
    this.tasks = this.taskList.tasks || [];
  }

  /**
   * Method to call on adding a task from one list to other list.
   * @param event : event object
   */
  private onAddTaskByDragAndDrop(event: any) {
    let toTaskListId: string;
    let fromTaskListId: string;
    let task: ITask;
    try {
      toTaskListId = this.taskList._id;
      task = this.tasks[event.newIndex];
      fromTaskListId = event.from.getAttribute('data-id');
      this.taskService
        .post(toTaskListId, task)
        .subscribe((taskList: ITaskList) => { },
          (err) => {
            this.errorOnMove.emit({
              fromTaskListId,
              newIndex: event.newIndex,
              oldIndex: event.oldIndex,
              taskId: task._id,
              toTaskListId,
            } as IMoveEvent);
          });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Method to call on removing a task from one list to other list.
   * @param event : event object
   */
  private onRemoveTaskByDragAndDrop(event: any) {
    let fromTaskListId: string;
    let toTaskListId: string;
    let taskId: string;
    try {
      fromTaskListId = this.taskList._id;
      taskId = event.item.getAttribute('data-id');
      toTaskListId = event.to.getAttribute('data-id');

      this.taskService
        .delete(fromTaskListId, { _id: taskId, name: null })
        .subscribe((taskList: ITaskList) => { },
          (err) => {
            // let task = <ITask>JSON.parse(event.item.getAttribute('data-task'));
            this.errorOnMove.emit({
              fromTaskListId,
              newIndex: event.newIndex,
              oldIndex: event.oldIndex,
              taskId,
              toTaskListId,
            } as IMoveEvent);
          });
    } catch (error) {
      console.error(error);
    }
  }

  public taskStringfy(task: ITask) {
    return JSON.stringify(task);
  }

  /**
   * Open a popup to add a new task to selected task list.
   */
  public addTask() {
    const dialogObj = this.dialogService.open(InputDialogComponent, {
      backdrop: 'static',
    });
    dialogObj.componentInstance.title = 'Add new task';
    dialogObj.componentInstance.save.subscribe((taskName: string) => {
      try {
        this.taskService
          .post(this.taskList._id, { name: taskName })
          .subscribe((taskList) => {
            this.taskList = taskList;
            this.tasks = this.taskList.tasks;
          });
      } catch (error) {
        console.error(error);
      }
    });
  }

  /**
   * Open a confirmation popup to delete the selected task
   * @param taskToDelete : task object
   */
  public onDelete(taskToDelete: ITask) {
    const dialogObj = this.dialogService.open(ConfirmDialogComponent, {
      backdrop: 'static',
    });
    dialogObj.componentInstance.title = 'Delete task';
    dialogObj.componentInstance.isDelete.subscribe((deleteTask: boolean) => {
      try {
        if (deleteTask) {
          this.taskService
            .delete(this.taskList._id, taskToDelete)
            .subscribe((taskList: ITaskList) => {
              this.taskList = taskList;
              this.tasks = this.taskList.tasks;
            });
        }
      } catch (error) {
        console.error(error);
      }
    });
  }
}
