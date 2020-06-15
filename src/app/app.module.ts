import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { TaskListService } from "./task-planner/sevices/task-list.service";
import { TaskPlannerModule } from "./task-planner/task-planner.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MyHttpInterceptor } from "./interceptors/http.interceptor";
import { TaskService } from "./task-planner/sevices/task.service";
@NgModule({
  imports: [BrowserModule, HttpClientModule, NgbModule, TaskPlannerModule],
  declarations: [AppComponent],
  providers: [
    TaskListService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
