import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { OAuth } from '../OAuth/OAuth';
 @Injectable()
export class TokenInterceptor implements HttpInterceptor {
        constructor(public auth: OAuth) {
            console.log("interseptor connected");
         } 
        intercept(request: HttpRequest<any>, next: HttpHandler) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            }); 
            
            return next.handle(request).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.status === 201) {
                        console.log("susccess");
                        
                    }
                })
            );
        }
}