import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthorizationService } from "../servises/authorization.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authorizationService: AuthorizationService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.authorizationService.getToken()
            
        
        req = req.clone({
            setHeaders: {
              'Content-Type' : 'application/json; charset=utf-8',
              'Accept'       : 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
        return next.handle(req);
    }

    

}
