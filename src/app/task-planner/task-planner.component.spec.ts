import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { defer, Observable } from 'rxjs';

import { ITaskList } from './modal/task-list';
import { TaskListService } from './sevices/task-list.service';
import { TaskPlannerComponent } from './task-planner.component';

class MockTaskListService {
  public taskLists: ITaskList[] = [];
  public get(): Observable<ITaskList[]> {
    return defer(() => Promise.resolve(this.taskLists));
  }
  public post(taskList: ITaskList): Observable<ITaskList[]> {
    return defer(() => Promise.resolve([taskList]));
  }
  public delete(taskList: ITaskList): Observable<ITaskList[]> {
    return defer(() => Promise.resolve([]));
  }
}

class MockDialogService {
  public open(content: any, options?: NgbModalOptions) {
    return {
      componentInstance: {
        isDelete: {
          subscribe: (cb) => {
            cb.call(null, true);
          },
        },
        submit: {
          subscribe: (cb) => {
            cb.call(null, 'Task1111');
          },
        },
        title: 'some title',
      },
    };
  }
}

describe('TaskPlannerComponent', () => {
  let component: TaskPlannerComponent;
  let taskListService: TaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskPlannerComponent,
        { provide: TaskListService, useClass: MockTaskListService },
      ],
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(TaskPlannerComponent);
    taskListService = TestBed.inject(TaskListService);
  });

  it('should create the Task Planner component', () => {
    expect(component).toBeTruthy();
  });

  it('should create empty task lists', () => {
    expect(component.taskLists).not.toBeUndefined();
  });

  it('should return taskLists on ngOnInit()', () => {
    component.ngOnInit();
    taskListService
      .get()
      .subscribe(
        (taskLists) =>
          expect(component.taskLists).toEqual(
            taskLists,
            'should return expected task lists',
          ),
        fail);
  });
});

describe('TaskPlannerComponent AddList and DeleteList', () => {
  let component: TaskPlannerComponent;
  let fixture: ComponentFixture<TaskPlannerComponent>;
  let dialog: MockDialogService;
  let taskListService: TaskListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskPlannerComponent],
      imports: [NgbModule],
      providers: [
        TaskPlannerComponent,
        { provide: TaskListService, useClass: MockTaskListService },
        { provide: NgbModal, useClass: MockDialogService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskPlannerComponent);
    dialog = TestBed.inject(NgbModal);
    taskListService = TestBed.inject(TaskListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should open add task list dialog', fakeAsync(() => {
    const addListButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      '#tasklist-add-button',
    );
    spyOn(component, 'addList').and.callThrough();
    spyOn(dialog, 'open').and.callThrough();
    spyOn(taskListService, 'post').and.callThrough();

    addListButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tick(250);
    expect(component.addList).toHaveBeenCalled();
    expect(dialog.open).toHaveBeenCalled();
    expect(taskListService.post).toHaveBeenCalled();
  }));

  it('should add new task list', fakeAsync(() => {
    const addListButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      '#tasklist-add-button',
    );
    const taskLists = [{ name: 'Task1111' }];

    addListButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tick(50);
    expect(component.taskLists).toEqual(
      taskLists,
      'should return expected taskLists',
    );
  }));

  it('should delete task list', fakeAsync(() => {
    const taskLists = [{ _id: '1', name: 'Task1111' }];
    component.taskLists = taskLists;
    fixture.detectChanges();
    const deleteListButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      '.delete-icon',
    );
    expect(component.taskLists.length).toBe(1);
    deleteListButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tick(50);
    expect(component.taskLists.length).toBe(0);
  }));
});
