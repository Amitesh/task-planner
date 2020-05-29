import { Component, VERSION } from '@angular/core';
import { TaskList } from './modal/task-list';
import { Task } from './modal/task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InputDialogComponent } from './dialogs/input-dialogs/input-dialog.component';
import { TaskListService } from './sevices/task-list.service';


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
      console.log(this.taskLists);
    });
    
    // let tasks: Array<Task> = [{name: 'task 1'}, {name: 'task 2'}];

    // this.taskLists.push({name: 'Todo', tasks: [...tasks]});
    // this.taskLists.push({name: 'Doing', tasks: [...tasks]});
    // this.taskLists.push({name: 'Done', tasks: [...tasks]});
  }

  addList() {
    const dialogObj = this.dialogService.open(
      InputDialogComponent,
      { backdrop: 'static' }
      );
    dialogObj.componentInstance.title = 'Add new list';
    dialogObj.result.then((result) => {
      if (result) {
        console.log('in result =>', result);
      }
    });

    dialogObj.componentInstance.onSubmit.subscribe((listName) => {
      console.log('call back =>', listName);
      this.taskLists.push({name: listName});
    })
  }
}
