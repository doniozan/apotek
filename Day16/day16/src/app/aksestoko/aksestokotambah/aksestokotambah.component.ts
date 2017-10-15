import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './aksestokotambahmodel';

@Component({
  selector: 'app-aksestokotambah',
  templateUrl: './aksestokotambah.component.html',
  styleUrls: ['./aksestokotambah.component.css']
})
export class AksestokotambahComponent implements OnInit {
  dataAksesTokoTambah:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataAksesTokoTambah = new Data();
  }
  aksesTokoTambah(dataAksesTokoTambah){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdProvinsi : kode, NamaProvinsi : nama});
    debugger;
    this.http.post('http://localhost:8889/api/kodeakses/',JSON.stringify(this.dataAksesTokoTambah),opsi)
    .subscribe((res: Response) => {
      window.location.href="./aksestoko";
    })
  }
}