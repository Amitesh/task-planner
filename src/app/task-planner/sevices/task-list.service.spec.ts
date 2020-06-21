import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

// Other imports
import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { TaskListService } from "./task-list.service";
import { TaskList } from "../modal/task-list";

describe("TaskListService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let taskListService: TaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [HttpClientTestingModule],
      // Provide the service-under-test and its dependencies
      providers: [TaskListService],
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    taskListService = TestBed.inject(TaskListService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// TaskListService method tests begin ///

  describe("be able to retrieve tasklist from the api", () => {
    let mockTaskLists: TaskList[];

    beforeEach(() => {
      taskListService = TestBed.inject(TaskListService);
      mockTaskLists = [
        {
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
        },
        {
          _id: "2",
          name: "Doing",
          tasks: [
            {
              _id: "21",
              name: "task21",
            },
            {
              _id: "23",
              name: "task23",
            },
            {
              _id: "22",
              name: "task22",
            },
          ],
        },
      ] as TaskList[];
    });

    it("should return expected tasklist (called once)", () => {
      taskListService
        .get()
        .subscribe(
          (taskLists) =>
            expect(taskLists).toEqual(
              mockTaskLists,
              "should return expected taskLists"
            ),
          fail
        );

      // taskListService should have made one request to GET taskLists from expected URL
      const req = httpTestingController.expectOne(taskListService.taskListUrl);
      expect(req.request.method).toEqual("GET");

      // Respond with the mock taskLists
      req.flush(mockTaskLists);
    });

    it("should be OK returning no task lists", () => {
      taskListService.get().subscribe((taskLists) => {
        expect(taskLists.length).toEqual(
          0,
          "should have empty taskLists array"
        );
      }, fail);

      const req = httpTestingController.expectOne(taskListService.taskListUrl);
      req.flush([]); // Respond with no taskLists
    });

    // This service reports the error but finds a way to let the app keep going.
    it("should turn 404 into an empty taskLists result", () => {
      taskListService.get().subscribe(
        (taskLists) => {
          expect(taskLists.length).toEqual(
            0,
            "should return empty taskLists array"
          );
        },
        (error) => {
          expect(error.status).toEqual(404);
        }
      );

      const req = httpTestingController.expectOne(taskListService.taskListUrl);

      // respond with a 404 and the error message in the body
      const msg = "deliberate 404 error";
      req.flush(msg, { status: 404, statusText: "Not Found" });
    });

    it("should return expected taskList (called multiple times)", () => {
      taskListService.get().subscribe();
      taskListService.get().subscribe();
      taskListService
        .get()
        .subscribe(
          (taskLists) =>
            expect(taskLists).toEqual(
              mockTaskLists,
              "should return expected taskLists"
            ),
          fail
        );

      const requests = httpTestingController.match(taskListService.taskListUrl);
      expect(requests.length).toEqual(3, "calls to task lists ()");

      // Respond to each request with different mock hero results
      requests[0].flush([]);
      requests[1].flush([mockTaskLists[0]]);
      requests[2].flush(mockTaskLists);
    });
  });

  describe("be able to create and update tasklist", () => {
    // Expecting the query form of URL so should not 404 when id not found
    it("should create a task list", () => {
      const newTaskList: TaskList = {
        name: "Done",
      };

      taskListService.post(newTaskList).subscribe((data) => {
        expect(data).toEqual([newTaskList], "should return the task list");
      }, fail);

      // taskListService should have made one request to PUT hero
      const req = httpTestingController.expectOne(taskListService.taskListUrl);
      expect(req.request.method).toEqual("POST");
      expect(req.request.body).toEqual(newTaskList);

      // Expect server to return the hero after PUT
      const expectedResponse = new HttpResponse({
        status: 204,
        statusText: "OK",
        body: [newTaskList],
      });
      req.event(expectedResponse);
    });

    it("should update a task list", () => {
      const newTaskList: TaskList = {
        name: "Done Done",
      };

      taskListService.put(newTaskList).subscribe((data) => {
        expect(data).toEqual([newTaskList], "should return the task list");
      }, fail);

      // taskListService should have made one request to PUT hero
      const req = httpTestingController.expectOne(taskListService.taskListUrl);
      expect(req.request.method).toEqual("PUT");
      expect(req.request.body).toEqual(newTaskList);

      // Expect server to return the hero after PUT
      const expectedResponse = new HttpResponse({
        status: 204,
        statusText: "OK",
        body: [newTaskList],
      });
      req.event(expectedResponse);
    });

    // This service reports the error but finds a way to let the app keep going.
    it("should turn 404 error into return of the update task list", () => {
      const newTaskList: TaskList = {
        name: "Done Done",
      };

      taskListService.put(newTaskList).subscribe(
        (data) =>
          expect(data).toEqual(
            [newTaskList],
            "should return the update task list"
          ),
        (error) => {
          expect(error.status).toEqual(404);
        }
      );

      const req = httpTestingController.expectOne(taskListService.taskListUrl);

      // respond with a 404 and the error message in the body
      const msg = "deliberate 404 error";
      req.flush(msg, { status: 404, statusText: "Not Found" });
    });
  });

  describe("be able to delete tasklist", () => {
    // Expecting the query form of URL so should not 404 when id not found
    it("should delete a task list", () => {
      const taskLists: TaskList[] = [{
        _id: "1",
        name: "Doing",
      }, {
        _id: "2",
        name: "Done",
      }];

      taskListService.delete(taskLists[0]).subscribe((data) => {
        expect(data).toEqual([taskLists[1]], "should return the task list");
      }, fail);

      // taskListService should have made one request to PUT hero
      const req = httpTestingController.expectOne(taskListService.taskListUrl + "/1");
      expect(req.request.method).toEqual("DELETE");

      // Expect server to return the hero after PUT
      const expectedResponse = new HttpResponse({
        status: 200,
        statusText: "OK",
        body: [taskLists[1]],
      });
      req.event(expectedResponse);
    });
  });
});
