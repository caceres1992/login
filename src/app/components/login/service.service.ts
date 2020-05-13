import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  authenticated = false;

  constructor(private http:HttpClient) { }

  authenticate(credential , callback){

    const headers = new HttpHeaders( credential ? {
      authorization: 'Basic ' + btoa(credential.username + ':' + credential.password)  
    }:{});

    this.http.get('user' , {headers:headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      }else {
        this.authenticated = false;
      }
      return callback && callback();
    }) ;

  }

}
