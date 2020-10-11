import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderServiceService } from './loader-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

    private count = 0;

    constructor(private loaderService: LoaderServiceService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.count === 0) {
        this.loaderService.setHttpProgressStatus(true);
      }
      this.count++;
      return next.handle(req).pipe(
        finalize(() => {
          this.count--;
          if (this.count === 0) {
            this.loaderService.setHttpProgressStatus(false);
          }
        }));
    }
}
