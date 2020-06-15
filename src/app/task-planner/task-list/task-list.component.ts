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
  tasks: Task[];

  sortableOptions: SortablejsOptions = {
    group: "task-planner-group",
  };

  constructor(
    public dialogService: NgbModal,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.taskList.tasks || [];
  }

  addTask() {
    // this.tasks.push({name: 'naya task'});
    const dialogObj = this.dialogService.open(InputDialogComponent, {
      backdrop: "static",
    });
    dialogObj.componentInstance.title = "Add new task";
    dialogObj.componentInstance.onSubmit.subscribe((taskName) => {
      console.log("call back task name=>", taskName);
      // this.tasks.push({name: taskName});
      this.taskService
        .post(this.taskList._id, { name: taskName })
        .subscribe((taskList) => {
          this.taskList = taskList;
          this.tasks = this.taskList.tasks;
        });
    });
  }

  onDelete(taskToDelete) {
    const dialogObj = this.dialogService.open(ConfirmDialogComponent, {
      backdrop: "static",
    });
    dialogObj.componentInstance.title = "Delete task";
    dialogObj.componentInstance.onDelete.subscribe((deleteTask) => {
      console.log("delete call back task name =>", taskToDelete.name);
      if (deleteTask) {
        this.taskService
          .delete(this.taskList._id, taskToDelete)
          .subscribe((taskList) => {
            this.taskList = taskList;
            this.tasks = this.taskList.tasks;
          });
      }
    });
  }
}
