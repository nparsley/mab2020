import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // modify or log outgoing request
    const modifiedReq = req.clone({
      withCredentials: true

    });

    return next.handle(modifiedReq)
    .pipe(
      filter(val => val.type === HttpEventType.Sent),

      tap(val => {
        console.log('sent the request');
        // if(val.type === HttpEventType.Sent) {
        //   console.log('request was sent to server');
        // }

        // if(val.type === HttpEventType.Response) {
        //   console.log('got a response from the API', val);
        // }
      })
    )
  }
}
