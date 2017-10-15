import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './statuspenjualantambahmodel';

@Component({
  selector: 'app-statuspenjualantambah',
  templateUrl: './statuspenjualantambah.component.html',
  styleUrls: ['./statuspenjualantambah.component.css']
})
export class StatuspenjualantambahComponent implements OnInit {
  dataStatusPenjualanTambah:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataStatusPenjualanTambah = new Data();
  }
  statusPenjualanTambah(dataStatusPenjualanTambah){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdProvinsi : kode, NamaProvinsi : nama});
    this.http.post('http://localhost:8889/api/statuspenjualan/',JSON.stringify(this.dataStatusPenjualanTambah),opsi)
    .subscribe((res: Response) => {
      window.location.href="./statuspenjualan";
    })
  }
}