import { Component, VERSION } from '@angular/core';
import { TaskList } from './modal/task-list';
import { Task } from './modal/task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InputDialogComponent } from './dialogs/input-dialogs/input-dialog.component';
import { TaskListService } from './sevices/task-list.service';
import { ConfirmDialogComponent } from './dialogs/confirm-dialogs/confirm-dialog.component';

@Component({
  selector: 'task-planner',
  templateUrl: './task-planner.component.html',
  styleUrls: [ './task-planner.component.scss' ]
})
export class TaskPlannerComponent  {
  taskLists: Array<TaskList>;

  constructor( 
    public dialogService: NgbModal, 
    private taskListService: TaskListService 
  ){
    this.taskLists = [];
  }

  ngOnInit(){
    this.taskListService.get().subscribe( (taskLists) => {
      this.taskLists = taskLists;
    });
  }

  addList() {
    const dialogObj = this.dialogService.open(
      InputDialogComponent,
      { backdrop: 'static' }
      );

    dialogObj.componentInstance.title = 'Add new list';
    dialogObj.componentInstance.onSubmit.subscribe((listName: string) => {
      this.taskListService.post({name: listName}).subscribe((taskLists) => {
        this.taskLists = taskLists;
      });
    })
  }

  onDeleteTask(taskToDelete){
    const dialogObj = this.dialogService.open(
      ConfirmDialogComponent,
      { backdrop: 'static' }
      );
    dialogObj.componentInstance.title = 'Delete list';
    dialogObj.componentInstance.onDelete.subscribe((deleteList) => {
      if( deleteList ){
        this.taskListService.delete(taskToDelete).subscribe((taskLists) => {
          this.taskLists = taskLists;
        });
      }
    });
  }
}
