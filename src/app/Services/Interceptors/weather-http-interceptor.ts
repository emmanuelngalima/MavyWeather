import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable()

export class WeatherHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // You can modify the request here
        const modifiedReq = req.clone({
          params: req.params.set('key', "48396ea2fc614989aa5233127242904"),
        });
    
        // The next.handle() method transforms the request into an Observable that the application can handle.
        return next.handle(modifiedReq);
      }
}