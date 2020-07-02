import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'ngx-sortablejs';

import { ConfirmDialogComponent } from './dialogs/confirm-dialogs/confirm-dialog.component';
import { InputDialogComponent } from './dialogs/input-dialogs/input-dialog.component';
import { TaskListService } from './sevices/task-list.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskPlannerComponent } from './task-planner.component';
import { EditableComponent } from '../editable/editable.component';
import { AutofocusDirective } from '../editable/autofocus.directive';
import { SameHeightSelectorDirective } from '../directives/same-height.directive';

@NgModule({
  declarations: [
    TaskPlannerComponent,
    TaskListComponent,
    InputDialogComponent,
    ConfirmDialogComponent,
    EditableComponent,
    AutofocusDirective,
    SameHeightSelectorDirective,
  ],
  exports: [TaskPlannerComponent, TaskListComponent],
  imports: [CommonModule, ReactiveFormsModule, NgbModule, SortablejsModule],
  providers: [TaskListService],
})
export class TaskPlannerModule { }
