import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private dataApi: DataApiService, private auth:AuthService) { }
  private users: any
  public displayedColumns: string[] = ['Name','LastName','IsMilitar','TimeCreate','isTemporal','username','email','id'];



  ngOnInit() {
    this.getListUser();
  }
  
  getListUser(){
    let token=this.auth.getToken()
    return this.dataApi.getAllUsers(token).subscribe(
      data=>{
        this.users=data;
        console.log(data)
      });
  }
}
