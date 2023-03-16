import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

  async getToken() {
    let tokenUrl: string = `${environment.host}/${environment.version}/auth/anonymous?platform=subscriptions`;
    const res = await firstValueFrom(this.http.get<{ token: string }>(tokenUrl));
    if (res){
      localStorage.setItem('token', res.token);
    }
    
  }
}
