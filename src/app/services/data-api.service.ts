import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( public http: HttpClient) { }

  getAllUsers(){
    const url= "http://localhost:3000/api/UsersApp";
    return this.http.get(url);
  }

}
