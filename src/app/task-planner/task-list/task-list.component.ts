import { Component, VERSION, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsOptions } from 'ngx-sortablejs';

import { Task } from '../modal/task';
import { InputDialogComponent } from '../dialogs/input-dialogs/input-dialog.component';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialogs/confirm-dialog.component';
import { TaskListService } from '../sevices/task-list.service';


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [ './task-list.component.scss' ]
})
export class TaskListComponent  {
  @Input() tasks: Array<Task>;

  sortableOptions: SortablejsOptions = {
    group: 'task-planner-group',
  };

  constructor( public dialogService: NgbModal, private TaskListService: TaskListService){
    // this.tasks = [];
  }

  ngOnInit(){
    this.tasks = this.tasks || [];
  }

  addTask(){
    // this.tasks.push({name: 'naya task'});
    const dialogObj = this.dialogService.open(
      InputDialogComponent,
      { backdrop: 'static' }
      );
    dialogObj.componentInstance.title = 'Add new task';
    dialogObj.componentInstance.onSubmit.subscribe((taskName) => {
      console.log('call back task name=>', taskName);
      this.tasks.push({name: taskName});
    });

    // API call
    //  this.TaskListService.post(post).subscribe();
  }

  onDelete(taskToDelete){
    const dialogObj = this.dialogService.open(
      ConfirmDialogComponent,
      { backdrop: 'static' }
      );
    dialogObj.componentInstance.title = 'Delete task';
    dialogObj.componentInstance.onDelete.subscribe((taskName) => {
      console.log('delete call back task name =>', taskName);
      // this.tasks.pop();
      let index = this.tasks.indexOf(taskToDelete);
      console.log("taskToDelete =>", index);
      this.tasks.splice(index, 1);
    });
  }
}
