import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/catch";
// import "rxjs/add/observable/throw";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authorizedRequest: HttpRequest<any>;
    authorizedRequest = request.clone({
      headers: request.headers.set("Authorization", "Bearer token"),
    });

    if (!authorizedRequest.headers.has("Content-Type")) {
      authorizedRequest = authorizedRequest.clone({
        headers: authorizedRequest.headers.set("Content-Type", "application/json"),
      });
    }

    authorizedRequest = authorizedRequest.clone({
      headers: authorizedRequest.headers.set("Accept", "application/json"),
    });

    return next.handle(authorizedRequest).pipe(
       retry(1),
       catchError((error: HttpErrorResponse) => {
         let errorMessage = '';
         console.log(error)
         if (error.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = `Error: ${error.error.message}`;
         } else {
           // server-side error
           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
         }
         window.alert(errorMessage); // Show error gracefully, instead of alert window
         return throwError(errorMessage);
       })
    );
  }
}
