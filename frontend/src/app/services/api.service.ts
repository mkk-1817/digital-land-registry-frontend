import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  getLogin(username:string,password:String): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, password: string,cpassword: string,fname:string,lname:string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password,fname,lname});
  }
}
