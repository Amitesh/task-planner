import { Component, VERSION } from "@angular/core";
import { TaskList } from "./modal/task-list";
import { Task } from "./modal/task";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { InputDialogComponent } from "./dialogs/input-dialogs/input-dialog.component";
import { TaskListService } from "./sevices/task-list.service";
import { ConfirmDialogComponent } from "./dialogs/confirm-dialogs/confirm-dialog.component";

/**
 * Task list component to render the each task list and it's task inside it.
 */
@Component({
  selector: "task-planner",
  templateUrl: "./task-planner.component.html",
  styleUrls: ["./task-planner.component.scss"],
})
export class TaskPlannerComponent {
  taskLists: Array<TaskList>;

  constructor(
    public dialogService: NgbModal,
    private taskListService: TaskListService
  ) {
    // Initialize the tasklist
    this.taskLists = [];
  }

  ngOnInit() {
    // fetch the all task lists from the server
    this.taskListService.get().subscribe((taskLists: TaskList[]) => {
      this.taskLists = taskLists;
    });
  }

  /**
   * Open a popup to add a new task list
   */
  addList() {
    const dialogObj = this.dialogService.open(InputDialogComponent, {
      backdrop: "static",
    });

    dialogObj.componentInstance.title = "Add new list";
    dialogObj.componentInstance.onSubmit.subscribe((listName: string) => {
      this.taskListService
        .post({ name: listName })
        .subscribe((taskLists: TaskList[]) => {
          this.taskLists = taskLists;
        });
    });
  }

  /**
   * Open the confirmation poup to delete a task list along with it's task
   * @param taskListToDelete 
   */
  onDeleteTaskList(taskListToDelete: TaskList) {
    const dialogObj = this.dialogService.open(ConfirmDialogComponent, {
      backdrop: "static",
    });
    dialogObj.componentInstance.title = "Delete list";
    dialogObj.componentInstance.onDelete.subscribe((deleteList: boolean) => {
      if (deleteList) {
        this.taskListService
          .delete(taskListToDelete)
          .subscribe((taskLists: TaskList[]) => {
            this.taskLists = taskLists;
          });
      }
    });
  }
}
