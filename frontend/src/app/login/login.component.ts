import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private apiService: ApiService) {}

  login() {
    this.apiService.getLogin(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.access_token); 
        this.message = "Login successful!";
      },
      error => {
        this.message = 'Invalid credentials.';
      }
    );
  }
}
