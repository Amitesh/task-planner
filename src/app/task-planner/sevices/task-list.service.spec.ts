// import { TestBed } from '@angular/core/testing';
// import { TaskListService } from './task-list.service';

// import { of } from 'rxjs'; // Add import
// import { TaskList } from '../modal/task-list';
// import {   async, inject } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { Injectable } from '@angular/core';
//  import { Observable } from 'rxjs';

 
// const httpOptions = {
//   headers: new HttpHeaders ({
//     'Content-Type': 'application/json; charset=UTF-8',
//   })
// }

//  describe('TaskListService', () => {
//   let TaskListService: TaskListService; // Add this
// let httpMock: HttpTestingController;
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   beforeEach(() => {
    
//     TestBed.configureTestingModule({
//        imports: [ HttpClientTestingModule ],
//       providers: [TaskListService]
//     });
// // 
//  httpClient = TestBed.inject(HttpClient);
//     httpTestingController = TestBed.inject(HttpTestingController);
//      TaskListService = TestBed.get(TaskListService); // Add this
//      httpMock = TestBed.get(HttpTestingController);
//   });
//  afterEach(() => {
//     // After every test, assert that there are no more pending requests.
//     httpTestingController.verify();
//   });
  
//   it('should be created', () => { // Remove inject()
//     // expect(TaskListService).toBeTruthy();
//   });
// });

// import { TestBed, inject } from '@angular/core/testing';

// import { TaskListService } from './task-list.service';
// import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
// describe('TestService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [TaskListService, HttpClient, HttpHandler]
//     });
//   });

//   it('should be created', inject([TaskListService], (service: TaskListService) => {
//     expect(service).toBeTruthy();
//   }));
// });