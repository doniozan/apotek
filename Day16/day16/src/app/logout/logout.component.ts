import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  dataLogout:Object;
  idLogout:String;
  constructor(private http:Http) { }

  ngOnInit() {
	  document.cookie = "token=; expires=Thu, 01 jan 1970 00:00:00:01 GMT;";
	  window.location.href="./login";
  }
}
