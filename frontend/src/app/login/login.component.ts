import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private apiService: ApiService,private router:Router) {}

  login() {
    this.apiService.getLogin(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.access_token); 
        this.message = "Login successful!";
        this.router.navigate(['/user-home']);
      },
      error => {
        this.message = 'Invalid credentials.';
      }
    );
  }
}
