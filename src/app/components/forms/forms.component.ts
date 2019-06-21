import { Component, OnInit } from '@angular/core';
import { DataForm } from '../../model/data-form';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private authService: AuthService )  { }
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

  onRegister(){
    console.log('datos',this.userApp)
    this.authService.registerUserApp(this.userApp).subscribe((user: any)=>{
      this.authService.setUser(user);
      this.authService.setToken(user.id)
      console.log('token',user.id)
    })

  }

}
