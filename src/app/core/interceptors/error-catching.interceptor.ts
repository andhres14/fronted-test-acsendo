import { Injectable } from '@angular/core';
import Swal from "sweetalert2";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('This is server side error');
            if (error.status === 403) errorMsg = `Error Code: ${error.status},  Message: Se ha llegado al limite de peticiones por minuto permitidas por la API de github, espere 1 min por favor...`
            else errorMsg = `Error Code: ${error.status},  Message: ${error.message}`
          }
          Swal.fire({
            title: 'Error!',
            text: errorMsg,
            icon: 'error',
            toast: true
          })
          return throwError(errorMsg);
        })
      );
  }
}
