import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5001/api/login'; 

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const loginData = { email, senha };  
  
    return this.http.post(this.apiUrl, loginData, { withCredentials: true });
  }
  
}
