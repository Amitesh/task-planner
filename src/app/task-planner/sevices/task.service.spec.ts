import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { TaskService } from "./task.service";
import { Task } from "../modal/task";
import { TaskList } from "../modal/task-list";

describe("TaskService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let taskService: TaskService;
  let mockTaskList: TaskList;
  let apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    taskService = TestBed.inject(TaskService);

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
    apiUrl = `${taskService.taskListUrl}/${mockTaskList._id}/tasks`;
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe("be able to retrieve tasklist from the api", () => {
    beforeEach(() => {
      taskService = TestBed.inject(TaskService);
    });

    it("should return expected task list (called once)", () => {
      taskService
        .get(mockTaskList._id)
        .subscribe(
          (tasks) =>
            expect(tasks).toEqual(
              mockTaskList.tasks,
              "should return expected task lists"
            ),
          fail
        );

      // taskService should have made one request to GET task lists from expected URL
      const req = httpTestingController.expectOne(apiUrl);
      expect(req.request.method).toEqual("GET");

      // Respond with the mock taskLists
      req.flush(mockTaskList.tasks);
    });

    it("should be OK returning no task lists", () => {
      taskService.get(mockTaskList._id).subscribe((tasks) => {
        expect(tasks.length).toEqual(0, "should have empty tasks array");
      }, fail);

      const req = httpTestingController.expectOne(apiUrl);
      req.flush([]); // Respond with no task lists
    });

    // This service reports the error but finds a way to let the app keep going.
    it("should turn 404 into an empty taskLists result", () => {
      taskService.get(mockTaskList._id).subscribe(
        (tasks) => {
          expect(tasks.length).toEqual(
            0,
            "should return empty taskLists array"
          );
        },
        (error) => {
          expect(error.status).toEqual(404);
        }
      );

      const req = httpTestingController.expectOne(apiUrl);

      // respond with a 404 and the error message in the body
      const msg = "deliberate 404 error";
      req.flush(msg, { status: 404, statusText: "Not Found" });
    });

    it("should return expected tasks (called multiple times)", () => {
      taskService.get(mockTaskList._id).subscribe();
      taskService.get(mockTaskList._id).subscribe();
      taskService
        .get(mockTaskList._id)
        .subscribe(
          (tasks) =>
            expect(tasks).toEqual(
              mockTaskList.tasks,
              "should return expected taskLists"
            ),
          fail
        );

      const requests = httpTestingController.match(apiUrl);
      expect(requests.length).toEqual(3, "calls to task lists ()");

      requests[0].flush([]);
      requests[1].flush(mockTaskList.tasks);
      requests[2].flush(mockTaskList.tasks);
    });
  });

  describe("be able to create and update task", () => {
    // Expecting the query form of URL so should not 404 when id not found
    it("should create a task", () => {
      const newTask: Task = {
        name: "Task 13",
      };

      const newTaskList = Object.assign(mockTaskList);
      newTaskList.tasks = [...mockTaskList.tasks, newTask];

      taskService.post(mockTaskList._id, newTask).subscribe((data) => {
        expect(data).toEqual(newTaskList, "should return the task");
      }, fail);

      const req = httpTestingController.expectOne(apiUrl);

      expect(req.request.method).toEqual("POST");

      const expectedResponse = new HttpResponse({
        status: 204,
        statusText: "OK",
        body: newTaskList,
      });

      req.event(expectedResponse);
    });

    it("should update a task", () => {
      const oldTask = mockTaskList.tasks[0];
      const updatedTask: Task = Object.assign(oldTask);
      updatedTask.name = "Updated task";

      let updatedTaskList = Object.assign(mockTaskList);
      updatedTaskList.tasks[0] = updatedTask;

      taskService.put(mockTaskList._id, updatedTask).subscribe((data) => {
        expect(data).toEqual(updatedTaskList, " should return the task list");
      }, fail);

      const req = httpTestingController.expectOne(
        `${apiUrl}/${updatedTask._id}`
      );
      expect(req.request.method).toEqual("PUT");

      const expectedResponse = new HttpResponse({
        status: 204,
        statusText: "OK",
        body: updatedTaskList,
      });
      req.event(expectedResponse);
    });

    // This service reports the error but finds a way to let the app keep going.
    it("should turn 404 error into return of the update task", () => {
      const oldTask = mockTaskList.tasks[0];
      const updatedTask: Task = Object.assign(oldTask);
      updatedTask.name = "Updated task";

      let updatedTaskList = Object.assign(mockTaskList);
      updatedTaskList.tasks[0] = updatedTask;

      taskService.put(mockTaskList._id, updatedTask).subscribe(
        (data) =>
          expect(data).toEqual(
            updatedTaskList,
            "should return the update task list"
          ),
        (error) => {
          expect(error.status).toEqual(404);
        }
      );

      const req = httpTestingController.expectOne(
        `${apiUrl}/${updatedTask._id}`
      );

      // respond with a 404 and the error message in the body
      const msg = "deliberate 404 error";
      req.flush(msg, { status: 404, statusText: "Not Found" });
    });
  });

  describe("be able to delete task", () => {
    // Expecting the query form of URL so should not 404 when id not found
    it("should delete a task", () => {
      let modifiedTaskList = Object.assign(mockTaskList);
      const taskToDelete = modifiedTaskList.tasks.splice(1, 1)[0];

      taskService.delete(mockTaskList._id, taskToDelete).subscribe((data) => {
        expect(data).toEqual(modifiedTaskList, "should return the task list");
      }, fail);

      const req = httpTestingController.expectOne(
        `${apiUrl}/${taskToDelete._id}`
      );
      expect(req.request.method).toEqual("DELETE");

      const expectedResponse = new HttpResponse({
        status: 200,
        statusText: "OK",
        body: modifiedTaskList,
      });
      req.event(expectedResponse);
    });
  });
});
