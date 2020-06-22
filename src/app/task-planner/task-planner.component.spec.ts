import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { Observable, defer } from "rxjs";
import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TaskPlannerComponent } from "./task-planner.component";
import { TaskListService } from "./sevices/task-list.service";
import { TaskList } from "./modal/task-list";

class MockTaskListService {
  taskLists: TaskList[] = [];
  get(): Observable<TaskList[]> {
    return defer(() => Promise.resolve(this.taskLists));
  }
  post(taskList: TaskList): Observable<TaskList[]> {
    return defer(() => Promise.resolve([taskList]));
  }
  delete(taskList: TaskList): Observable<TaskList[]> {
    return defer(() => Promise.resolve([]));
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

describe("TaskPlannerComponent", () => {
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

  it("should create the Task Planner component", () => {
    expect(component).toBeTruthy();
  });

  it("should create empty task lists", () => {
    expect(component.taskLists).not.toBeUndefined();
  });

  it("should return taskLists on ngOnInit()", () => {
    component.ngOnInit();
    taskListService
      .get()
      .subscribe(
        (taskLists) =>
          expect(component.taskLists).toEqual(
            taskLists,
            "should return expected task lists"
          ),
        fail
      );
  });
});

describe("TaskPlannerComponent AddList and DeleteList", () => {
  let component: TaskPlannerComponent;
  let fixture: ComponentFixture<TaskPlannerComponent>;
  let dialog: MockDialogService;
  let taskListService: TaskListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      declarations: [TaskPlannerComponent],
      providers: [
        TaskPlannerComponent,
        { provide: TaskListService, useClass: MockTaskListService },
        { provide: NgbModal, useClass: MockDialogService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskPlannerComponent);
    dialog = TestBed.get(NgbModal);
    taskListService = TestBed.inject(TaskListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should open add task list dialog", fakeAsync(() => {
    const addListButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      "#tasklist-add-button"
    );
    spyOn(component, "addList").and.callThrough();
    spyOn(dialog, "open").and.callThrough();
    spyOn(taskListService, "post").and.callThrough();

    addListButton.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    tick(250);
    expect(component.addList).toHaveBeenCalled();
    expect(dialog.open).toHaveBeenCalled();
    expect(taskListService.post).toHaveBeenCalled();
  }));

  it("should add new task list", fakeAsync(() => {
    const addListButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      "#tasklist-add-button"
    );
    const taskLists = [{ name: "Task1111" }];

    addListButton.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    tick(50);
    expect(component.taskLists).toEqual(
      taskLists,
      "should return expected taskLists"
    );
  }));

  it("should delete task list", fakeAsync(() => {
    const taskLists = [{ _id: "1", name: "Task1111" }];
    component.taskLists = taskLists;
    fixture.detectChanges();
    const deleteListButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      ".delete-icon"
    );
    expect(component.taskLists.length).toBe(1);
    deleteListButton.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    tick(50);
    expect(component.taskLists.length).toBe(0);
  }));
});
