import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  cpassword: string = '';
  fname:string='';
  lname:string='';
  message: string = '';

  constructor(private apiService: ApiService,private router:Router) {}

  register() {
    if (this.password!=this.cpassword){
      this.message='Passwords do not match';
    }
    this.apiService.register(this.username, this.password,this.fname,this.lname,this.cpassword).subscribe(
      response => {
        this.message = 'Registration successful!';
        this.router.navigate(['/login']);
      },
      error => {
        this.message = 'User already exists.';
      }
    );
  }
}
