import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { TaskListService } from './task-planner/sevices/task-list.service';
import { TaskService } from './task-planner/sevices/task.service';
import { TaskPlannerModule } from './task-planner/task-planner.module';
import { ThemeSwitherService } from './services/theme-switcher.service';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ThemeSwitcherComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule, TaskPlannerModule],
  providers: [
    TaskListService,
    TaskService,
    ThemeSwitherService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
    },
  ],
})
export class AppModule { }
