import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private apiService: ApiService) {}

  register() {
    this.apiService.register(this.username, this.password).subscribe(
      response => {
        this.message = 'Registration successful!';
      },
      error => {
        this.message = 'User already exists.';
      }
    );
  }
}
