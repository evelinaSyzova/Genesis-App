import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

  getToken() {
    let tokenUrl: string = `${environment.host}/${environment.version}/auth/anonymous?platform=subscriptions`;
    return this.http.get<{ token: string }>(tokenUrl).pipe(
      map((res) => res.token)
    );
  }
}
