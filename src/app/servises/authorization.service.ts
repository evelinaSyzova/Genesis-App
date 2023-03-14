import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

  getToken() {
    let tokenUrl: string = `${environment.host}/${environment.version}/auth/anonymous?platform=subscriptions`;
    this.http.get<{ token: string }>(tokenUrl).subscribe((res) => {
      localStorage.setItem('token', res.token);
    });
  }
}
