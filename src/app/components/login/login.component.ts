import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app_log',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Title: string = "Login";
  greetin: {};

  constructor(private http: HttpClient, private header: HttpHeaders) {
    http.get('resource').subscribe(data => this.greetin = data);
  }





}
