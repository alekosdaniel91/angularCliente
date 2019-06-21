import { Component, OnInit } from '@angular/core';
import { DataForm } from '../../model/data-form';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }
  private userApp: DataForm={
    Name: '',
    LastName: '', 
    IsMilitar: false, 
    isTemporal: false, 
    username: '', 
    email: '', 
    password:''
  }
  ngOnInit() {
  }
  onLogin(){
    console.log('datos',this.userApp)
    this.authService.loginUser(this.userApp.email,this.userApp.password).subscribe((user: any)=>{
      this.authService.setUser(user);
      this.authService.setToken(user.id)
      this.router.navigate(['/home']);
    })
  }
}
