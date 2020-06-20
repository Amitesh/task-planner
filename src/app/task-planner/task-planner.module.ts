import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SortablejsModule } from "ngx-sortablejs";

import { InputDialogComponent } from "./dialogs/input-dialogs/input-dialog.component";
import { ConfirmDialogComponent } from "./dialogs/confirm-dialogs/confirm-dialog.component";

import { TaskPlannerComponent } from "./task-planner.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskListService } from "./sevices/task-list.service";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, NgbModule, SortablejsModule],
  exports: [TaskPlannerComponent, TaskListComponent],
  declarations: [
    TaskPlannerComponent,
    TaskListComponent,
    InputDialogComponent,
    ConfirmDialogComponent,
  ],
  providers: [TaskListService],
})
export class TaskPlannerModule {}
