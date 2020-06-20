import { Component, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SortablejsOptions } from "ngx-sortablejs";

import { Task } from "../modal/task";
import { InputDialogComponent } from "../dialogs/input-dialogs/input-dialog.component";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialogs/confirm-dialog.component";
import { TaskList } from "../modal/task-list";
import { TaskService } from "../sevices/task.service";

@Component({
  selector: "task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent {
  @Input() taskList: TaskList;
  private tasks: Task[];

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
        console.log(error);
      }
    });
  }

  onDelete(taskToDelete) {
    const dialogObj = this.dialogService.open(ConfirmDialogComponent, {
      backdrop: "static",
    });
    dialogObj.componentInstance.title = "Delete task";
    dialogObj.componentInstance.onDelete.subscribe((deleteTask: boolean) => {
      try {
        if (deleteTask) {
          this.taskService
            .delete(this.taskList._id, taskToDelete)
            .subscribe((taskList) => {
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
