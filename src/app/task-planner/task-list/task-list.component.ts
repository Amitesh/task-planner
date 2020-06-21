import { Component, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SortablejsOptions } from "ngx-sortablejs";

import { Task } from "../modal/task";
import { TaskList } from "../modal/task-list";
import { TaskService } from "../sevices/task.service";
import { InputDialogComponent } from "../dialogs/input-dialogs/input-dialog.component";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialogs/confirm-dialog.component";

/**
 * Task component to render the individual task
 */
@Component({
  selector: "task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent {
  // Task list to hold the all tasks and it's properties
  @Input() taskList: TaskList;
  private tasks: Task[];

  /**
   * Set Sortablejs configuration for group name and callbacks
   */
  private sortableOptions: SortablejsOptions = {
    group: "task-planner-group",
    onAdd: (event: any) => {
      this.onAddTaskByDragAndDrop(event);
    },
    onRemove: (event: any) => {
      this.onRemoveTaskByDragAndDrop(event);
    },
  };

  constructor(
    public dialogService: NgbModal,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.taskList.tasks || [];
  }

  /**
   * Method to call on adding a task from one list to other list.
   * @param event 
   */
  onAddTaskByDragAndDrop(event: any) {
    let toTaskListId: string;
    let task: Task;
    try {
      toTaskListId = this.taskList._id;
      task = this.tasks[event.newIndex];
      this.taskService
        .post(toTaskListId, task)
        .subscribe((taskList: TaskList) => {});
    } catch (error) {
      console.error(error);
    }
  }
  
  /**
   * Method to call on removing a task from one list to other list.
   * @param event 
   */
  onRemoveTaskByDragAndDrop(event: any) {
    let fromTaskListId: string;
    let taskId: string;
    try {
      fromTaskListId = this.taskList._id;
      taskId = event.item.getAttribute("data-id");

      this.taskService
        .delete(fromTaskListId, { _id: taskId, name: null })
        .subscribe((taskList: TaskList) => {});
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Open a popup to add a new task to selected task list.
   */
  addTask() {
    const dialogObj = this.dialogService.open(InputDialogComponent, {
      backdrop: "static",
    });
    dialogObj.componentInstance.title = "Add new task";
    dialogObj.componentInstance.onSubmit.subscribe((taskName: string) => {
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
   * @param taskToDelete 
   */
  onDelete(taskToDelete: Task) {
    const dialogObj = this.dialogService.open(ConfirmDialogComponent, {
      backdrop: "static",
    });
    dialogObj.componentInstance.title = "Delete task";
    dialogObj.componentInstance.onDelete.subscribe((deleteTask: boolean) => {
      try {
        if (deleteTask) {
          this.taskService
            .delete(this.taskList._id, taskToDelete)
            .subscribe((taskList: TaskList) => {
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
