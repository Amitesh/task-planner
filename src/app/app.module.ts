import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { TaskListService } from "./task-planner/sevices/task-list.service";
import { TaskPlannerModule } from "./task-planner/task-planner.module";

@NgModule({
  imports: [BrowserModule, HttpClientModule, NgbModule, TaskPlannerModule],
  declarations: [AppComponent],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
// https://my-json-server.typicode.com/Amitesh/task-planner/data
