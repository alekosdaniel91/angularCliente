import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
 import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent },
  {path:'home',component:UsersComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
