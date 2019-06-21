import { Component, OnInit } from '@angular/core';
import { DataForm } from '../../model/data-form';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

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
  
  private userDoc={
    namedoc: '',
    document: '', 
    place: '', 
    date: '', 
    }
    private userInfo={
      Address: '',
      Country: '', 
      City: '', 
      CountryCode: '',
      Phone:'',
      CellPhone:'',
      EmergencyName:'',
      EmergencyPhone:'', 
      }

  public isError= false;
  ngOnInit() {
  }

  onRegister(form: NgForm ){
    if(form.valid){
      this.authService.registerUserApp(this.userApp).subscribe((user: any)=>{
        this.authService.setUser(user);
        this.authService.setToken(user.id)
        console.log('token',user.id)
      })
    } else this.onIsError();
   }

  onIsError(): void {
     this.isError = true;
     setTimeout(() => {
       this.isError = false;
     }, 4000);
   }
}
