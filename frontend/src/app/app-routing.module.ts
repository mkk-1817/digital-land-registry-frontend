import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AddPropertyComponent } from './add-property/add-property.component';
const routes: Routes = [
    { path: '', component: LandingPageComponent },  
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'user-home', component: UserHomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    {path: 'add-property',component:AddPropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
