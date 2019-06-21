import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private users: any
  public displayedColumns: string[] = ['Name','LastName','IsMilitar','TimeCreate','isTemporal','username','email','id'];



  ngOnInit() {
    this.getListUser();
  }
  getListUser(){
    return this.dataApi.getAllUsers().subscribe(
      data=>this.users=data);
  }
}
