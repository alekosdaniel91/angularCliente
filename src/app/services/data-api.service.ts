import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { DataForm } from '../model/data-form';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(public http: HttpClient) { }

  getAllUsers(token) {
    const url = "http://localhost:3000/api/AppUsers?access_token=";
    return this.http.get(url + token);
  }

  registerDoc(user, data: DataForm["userDoc"]) {
    let urltype = "http://localhost:3000/api/TypeDocuments?access_token=";
    let urlDoc = "http://localhost:3000/api/Userdocuments?access_token=";

    return this.http.post(urltype + user.id, {
      NameTypeDocument: data.typeDoc,
      TypeDocumentID: user.userID
    })
      .pipe(map(() => {
        this.http.post(urlDoc + user.id,
          {
            UserID: user.userID,
            TypeDocumentID: user.userID,
            Document: data.document,
            PlaceExpedition: data.place,
            DateExpedition: data.date
          })
          .pipe(map(res => res))
      }));;


  }
  registerContactInfo(user, data: DataForm["userInfo"]) {
    let urlCountry = "http://localhost:3000/api/Countries?access_token=";
    let urlContact = "http://localhost:3000/api/Userdocuments?access_token=";

    return this.http.post(urlCountry + user.id, {
      
        CountryCode: data.CountryCode,
        CountryName: data.Country
      
      }
    )
      .pipe(map(() => {
        this.http.post(urlContact + user.id,
          {
        userID:user.userID,
        Address: data.Address,
        CountryID: user.userID,
        City: data.City,
        Phone: data.Phone,
        CelPhone: data.CellPhone,
        EmergencyName: data.EmergencyName,
        EmergencyPhone: data.EmergencyPhone
          })
          .pipe(map(res => res))
      }));;

  }

}
