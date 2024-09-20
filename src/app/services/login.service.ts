import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiUrl}/login`;

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const loginData = { email, senha };

    return this.http.post(this.apiUrl, loginData, { withCredentials: true });
  }

}
