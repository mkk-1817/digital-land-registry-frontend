import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private router:Router){}
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToSignUp(){
    this.router.navigate(['/signup']);
  }
}
