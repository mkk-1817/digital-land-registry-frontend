import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'user-home',component:UserHomeComponent},
  {path:"admin",component:AdminComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect invalid routes
];
