import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserData } from '../model/data-form';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {}

  header: HttpHeaders = new HttpHeaders({
    "Content-Type":"aplication/json"
  });
  registerUserApp(dat: UserData){
    const urlApi= 'http://localhost:3000/api/AppUsers';
    return this.http.post(urlApi,{
      Name: dat.Name,
    LastName: dat.LastName,
    IsMilitar: dat.IsMilitar,
    isTemporal: dat.isTemporal,
    username: dat.username,
    email: dat.email,
    password:dat.password
    })
    .pipe(map(data=>data))
  }

  loginUser(email: string, password: string){
    const urlApi= 'http://localhost:3000/api/AppUsers/login/?include=user';
    return this.http.post(urlApi,{
      email:email,
      password:password
    })
    .pipe(map(data=>data))
  }

  setUser(user: UserData): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserData {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserData = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<UserData>(url_api, { headers: this.header });
  }
}
