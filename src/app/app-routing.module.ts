import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:'',component:LoginComponent, pathMatch: 'full'},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
