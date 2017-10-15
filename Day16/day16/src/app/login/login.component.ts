import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './logintambahmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataLogin:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataLogin = new Data();
  }
  login(dataLogin){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    this.http.post('http://localhost:8889/api/login/authenticate/',JSON.stringify(this.dataLogin),opsi)
    .subscribe((res: Response) => {
		document.cookie = "token="+res.json().token;
    })
  }
}