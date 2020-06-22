import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { Observable, defer } from "rxjs";
import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TaskList } from "../modal/task-list";
import { TaskListComponent } from "./task-list.component";
import { TaskService } from "../sevices/task.service";
import { Task } from "../modal/task";

class MockTaskService {
  taskLists: TaskList[] = [];
  get(): Observable<TaskList[]> {
    return defer(() => Promise.resolve(this.taskLists));
  }
  post(taskListId: string, task: Task): Observable<TaskList> {
    return defer(() =>
      Promise.resolve({ _id: taskListId, name: "Todo", tasks: [task] })
    );
  }
  delete(taskListId: string, taskToDelete: TaskList): Observable<TaskList> {
    return defer(() =>
      Promise.resolve({ _id: taskListId, name: "Todo", tasks: [] })
    );
  }
}

class MockDialogService {
  open() {
    return {
      componentInstance: {
        title: "some title",
        onSubmit: {
          subscribe: (cb: Function) => {
            cb.call(null, "Task1111");
          },
        },
        onDelete: {
          subscribe: (cb: Function) => {
            cb.call(null, true);
          },
        },
      },
    };
  }
}

describe("TaskListComponent", () => {
  let component: TaskListComponent;
  let taskService: TaskService;
  let fixture: ComponentFixture<TaskListComponent>;
  let mockTaskList: TaskList;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        TaskListComponent,
        { provide: TaskService, useClass: MockTaskService },
      ],
    });
    // inject both the component and the dependent service.
    taskService = TestBed.inject(TaskService);
    fixture = TestBed.createComponent(TaskListComponent);
    mockTaskList = {
      _id: "1",
      name: "Todo",
      tasks: [
        {
          _id: "1",
          name: "task11",
        },
        {
          _id: "11",
          name: "task12",
        },
      ],
    };
    component = fixture.componentInstance;
    component.taskList = mockTaskList;
    fixture.detectChanges();
  });

  it("should create the Task List component", () => {
    expect(component).toBeTruthy();
  });

  it("should create empty task list", () => {
    expect(component.taskList).not.toBeUndefined();
  });

  it("should call ngOnInit()", () => {
    let spyComponent = spyOn(component, "ngOnInit").and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(spyComponent).toHaveBeenCalledTimes(1);
  });
});

describe("TaskListComponent add and delete task", () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let dialog: MockDialogService;
  let taskService: TaskService;
  let mockTaskList: TaskList;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      declarations: [TaskListComponent],
      providers: [
        TaskListComponent,
        { provide: TaskService, useClass: MockTaskService },
        { provide: NgbModal, useClass: MockDialogService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskListComponent);
    dialog = TestBed.get(NgbModal);
    taskService = TestBed.inject(TaskService);
    mockTaskList = {
      _id: "1",
      name: "Todo",
      tasks: [],
    };
    component = fixture.componentInstance;
    component.taskList = mockTaskList;
    fixture.detectChanges();
  }));

  it("should open add task dialog", fakeAsync(() => {
    const addTaskButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      ".add-task-btn"
    );
    spyOn(component, "addTask").and.callThrough();
    spyOn(dialog, "open").and.callThrough();
    spyOn(taskService, "post").and.callThrough();

    addTaskButton.dispatchEvent(new Event("click"));
    fixture.detectChanges();

    expect(component.addTask).toHaveBeenCalled();
    expect(dialog.open).toHaveBeenCalled();
    expect(taskService.post).toHaveBeenCalled();
  }));

  it("should add new task", fakeAsync(() => {
    const addTaskButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      ".add-task-btn"
    );
    const task = { name: "Task1111" };
    const newTaskList = Object.assign(mockTaskList);
    newTaskList.tasks = [task];
    addTaskButton.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    expect(component.taskList.tasks).toEqual(
      newTaskList.tasks,
      "should return expected task lists"
    );
  }));

  it("should delete task", fakeAsync(() => {
    const newTaskList = Object.assign(mockTaskList);
    component.taskList = Object.assign(mockTaskList, {
      tasks: [{ _id: "1", name: "Task1111" }],
    });
    component.ngOnInit();
    fixture.detectChanges();
    tick(50);
    const deleteListButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      ".task-delete.delete-icon"
    );
    expect(component.taskList.tasks.length).toBe(1);
    deleteListButton.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    tick(50);
    expect(component.taskList.tasks.length).toBe(0);
  }));
});
