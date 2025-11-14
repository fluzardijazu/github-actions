import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { from, lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return from(this.handle(request, next));
    }
    async handle(req: HttpRequest<any>, next: HttpHandler) {
            const accessToken = 'JWT Token';
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return lastValueFrom(next.handle(authReq));
    }
}
