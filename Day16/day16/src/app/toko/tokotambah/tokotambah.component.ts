import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './tokotambahmodel';

@Component({
  selector: 'app-tokotambah',
  templateUrl: './tokotambah.component.html',
  styleUrls: ['./tokotambah.component.css']
})
export class TokotambahComponent implements OnInit {
  dataTokoTambah:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataTokoTambah = new Data();
  }
  tokoTambah(dataTokoTambah){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdProvinsi : kode, NamaProvinsi : nama});
    debugger;
    this.http.post('http://localhost:8889/api/toko/',JSON.stringify(this.dataTokoTambah),opsi)
    .subscribe((res: Response) => {
      window.location.href="./toko";
    })
  }
}