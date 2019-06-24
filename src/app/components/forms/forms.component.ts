import { Component, OnInit } from '@angular/core';
import { DataForm } from '../../model/data-form';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) {

  }
  private userApp: DataForm = {
    user: {
      Name: '',
      LastName: '',
      IsMilitar: false,
      isTemporal: false,
      username: '',
      email: '',
      password: '1234'
    },
    userDoc: {
      typeDoc: '',
      document: '',
      place: '',
      date: '',
    },
    userInfo: {
      Address: '',
      Country: '',
      City: '',
      CountryCode: '',
      Phone: '',
      CellPhone: '',
      EmergencyName: '',
      EmergencyPhone: '',
    }


  }
 

  public isError = false;
  ngOnInit() {
}

  onRegister(form: NgForm) {
    if (form.valid) {
      this.authService.registerUserApp(this.userApp.user).subscribe((user: any) => {
        
        this.authService.setUser(user);
        this.authService.setToken(user.id)

        //add user document
        this.dataApi.registerDoc(user,this.userApp.userDoc).subscribe(
          res=>console.log(res)
        );
        //add Contact Info
        this.dataApi.registerContactInfo(user,this.userApp.userInfo).subscribe(
          res=>console.log(res)
        );
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
