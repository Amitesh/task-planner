import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmDialogComponent } from './dialogs/confirm-dialogs/confirm-dialog.component';
import { InputDialogComponent } from './dialogs/input-dialogs/input-dialog.component';
import { ITask } from './modal/task';
import { ITaskList } from './modal/task-list';
import { TaskListService } from './sevices/task-list.service';

/**
 * Task list component to render the each task list and it's task inside it.
 */
@Component({
  selector: 'task-planner',
  styleUrls: ['./task-planner.component.scss'],
  templateUrl: './task-planner.component.html',
})
export class TaskPlannerComponent implements OnInit {
  public taskLists: Array<ITaskList>;

  constructor(
    public dialogService: NgbModal,
    private taskListService: TaskListService,
  ) {
    // Initialize the tasklist
    this.taskLists = [];
  }

  public ngOnInit() {
    // fetch the all task lists from the server
    this.taskListService.get().subscribe((taskLists: ITaskList[]) => {
      this.taskLists = taskLists;
    });
  }

  /**
   * Open a popup to add a new task list
   */
  public addList() {
    const dialogObj = this.dialogService.open(InputDialogComponent, {
      backdrop: 'static',
    });

    dialogObj.componentInstance.title = 'Add new task list';
    dialogObj.componentInstance.save.subscribe((listName: string) => {
      this.taskListService
        .post({ name: listName })
        .subscribe((taskLists: ITaskList[]) => {
          this.taskLists = taskLists;
        });
    });
  }

  /**
   * Open the confirmation poup to delete a task list along with it's task
   * @param taskListToDelete : Task object
   */
  public deleteTaskList(taskListToDelete: ITaskList) {
    const dialogObj = this.dialogService.open(ConfirmDialogComponent, {
      backdrop: 'static',
    });
    dialogObj.componentInstance.title = 'Delete task list';
    dialogObj.componentInstance.isDelete.subscribe((deleteList: boolean) => {
      if (deleteList) {
        this.taskListService
          .delete(taskListToDelete)
          .subscribe((taskLists: ITaskList[]) => {
            this.taskLists = taskLists;
          });
      }
    });
  }

  public errorOnMove(event) {
    this.taskListService.move(this.taskLists, event);
  }

  public updateTaskListName(name: string, task: ITask) {
    console.log('in updateTaskListName =>', name, task);
    const taskListToUpdate = Object.assign({}, task);
    taskListToUpdate.name = name;
    this.taskListService
      .put(taskListToUpdate)
      .subscribe((taskLists: ITaskList[]) => {
        this.taskLists = taskLists;
      });
  }
}
