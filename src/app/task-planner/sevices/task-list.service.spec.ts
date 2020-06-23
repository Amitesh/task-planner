import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ITaskList } from '../modal/task-list';
import { TaskListService } from './task-list.service';

describe('TaskListService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let taskListService: TaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskListService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    taskListService = TestBed.inject(TaskListService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('be able to retrieve task lists from the api', () => {
    let mockTaskLists: ITaskList[];

    beforeEach(() => {
      taskListService = TestBed.inject(TaskListService);
      mockTaskLists = [
        {
          _id: '1',
          name: 'Todo',
          tasks: [
            {
              _id: '1',
              name: 'task11',
            },
            {
              _id: '11',
              name: 'task12',
            },
          ],
        },
        {
          _id: '2',
          name: 'Doing',
          tasks: [
            {
              _id: '21',
              name: 'task21',
            },
            {
              _id: '23',
              name: 'task23',
            },
            {
              _id: '22',
              name: 'task22',
            },
          ],
        },
      ] as ITaskList[];
    });

    it('should return expected task lists (called once)', () => {
      taskListService
        .get()
        .subscribe(
          (taskLists) =>
            expect(taskLists).toEqual(
              mockTaskLists,
              'should return expected task lists',
            ),
          fail,
        );

      const req = httpTestingController.expectOne(taskListService.taskListUrl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock taskLists
      req.flush(mockTaskLists);
    });

    it('should be OK returning no task lists', () => {
      taskListService.get().subscribe((taskLists) => {
        expect(taskLists.length).toEqual(
          0,
          'should have empty task lists array',
        );
      }, fail);

      const req = httpTestingController.expectOne(taskListService.taskListUrl);
      req.flush([]); // Respond with no taskLists
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty task lists result', () => {
      taskListService.get().subscribe(
        (taskLists) => {
          expect(taskLists.length).toEqual(
            0,
            'should return empty task lists array',
          );
        },
        (error) => {
          expect(error.status).toEqual(404);
        },
      );

      const req = httpTestingController.expectOne(taskListService.taskListUrl);

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });

    it('should return expected task lists (called multiple times)', () => {
      taskListService.get().subscribe();
      taskListService.get().subscribe();
      taskListService
        .get()
        .subscribe(
          (taskLists) =>
            expect(taskLists).toEqual(
              mockTaskLists,
              'should return expected task lists',
            ),
          fail,
        );

      const requests = httpTestingController.match(taskListService.taskListUrl);
      expect(requests.length).toEqual(3, 'calls to task lists ()');

      // Respond to each request with different mock task list results
      requests[0].flush([]);
      requests[1].flush([mockTaskLists[0]]);
      requests[2].flush(mockTaskLists);
    });
  });

  describe('be able to create and update task list', () => {
    // Expecting the query form of URL so should not 404 when id not found
    it('should create a task list', () => {
      const newTaskList: ITaskList = {
        name: 'Done',
      };

      taskListService.post(newTaskList).subscribe((data) => {
        expect(data).toEqual([newTaskList], 'should return the task list');
      }, fail);

      // taskListService should have made one request to PUT TaskList
      const req = httpTestingController.expectOne(taskListService.taskListUrl);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(newTaskList);

      // Expect server to return the TaskList after PUT
      const expectedResponse = new HttpResponse({
        body: [newTaskList],
        status: 204,
        statusText: 'OK',
      });
      req.event(expectedResponse);
    });

    it('should update a task list', () => {
      const newTaskList: ITaskList = {
        name: 'Done Done',
      };

      taskListService.put(newTaskList).subscribe((data) => {
        expect(data).toEqual([newTaskList], 'should return the task list');
      }, fail);

      const req = httpTestingController.expectOne(taskListService.taskListUrl);
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(newTaskList);

      const expectedResponse = new HttpResponse({
        body: [newTaskList],
        status: 204,
        statusText: 'OK',
      });
      req.event(expectedResponse);
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 error into return of the update task list', () => {
      const newTaskList: ITaskList = {
        name: 'Done Done',
      };

      taskListService.put(newTaskList).subscribe(
        (data) =>
          expect(data).toEqual(
            [newTaskList],
            'should return the update task list',
          ),
        (error) => {
          expect(error.status).toEqual(404);
        },
      );

      const req = httpTestingController.expectOne(taskListService.taskListUrl);

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
  });

  describe('be able to delete task list', () => {
    // Expecting the query form of URL so should not 404 when id not found
    it('should delete a task list', () => {
      const taskLists: ITaskList[] = [
        {
          _id: '1',
          name: 'Doing',
        },
        {
          _id: '2',
          name: 'Done',
        },
      ];

      taskListService.delete(taskLists[0]).subscribe((data) => {
        expect(data).toEqual([taskLists[1]], 'should return the task list');
      }, fail);

      const req = httpTestingController.expectOne(
        taskListService.taskListUrl + '/1',
      );
      expect(req.request.method).toEqual('DELETE');

      const expectedResponse = new HttpResponse({
        body: [taskLists[1]],
        status: 200,
        statusText: 'OK',
      });
      req.event(expectedResponse);
    });
  });
});
