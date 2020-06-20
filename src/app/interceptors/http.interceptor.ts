import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authorizedRequest: HttpRequest<any>;

    // Add header key-values to each request
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
    /*
     * Handle the error status code and messages at common place.
     * Use dialog or toaster to show the messages .
     * Use status code to design the error logging for server or for user.
     */
    return next.handle(authorizedRequest).pipe(
      // Give a one more retry for slower devices
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
