import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RHETOS_REST_URL } from '../config/injection-tokens';

@Injectable()
export class RhetosWithCredentialsInterceptor implements HttpInterceptor {
  constructor(@Inject(RHETOS_REST_URL) private rhetosRestUrl: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(this.rhetosRestUrl)) {
      req = req.clone({
        withCredentials: true
      });
    }

    return next.handle(req);
  }
}
