import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './statuspembayarantambahmodel';

@Component({
  selector: 'app-statuspembayarantambah',
  templateUrl: './statuspembayarantambah.component.html',
  styleUrls: ['./statuspembayarantambah.component.css']
})
export class StatuspembayarantambahComponent implements OnInit {
  dataStatusPembayaranTambah:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataStatusPembayaranTambah = new Data();
  }
  statusPembayaranTambah(dataStatusPembayaranTambah){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdProvinsi : kode, NamaProvinsi : nama});
    this.http.post('http://localhost:8889/api/statuspembayaran/',JSON.stringify(this.dataStatusPembayaranTambah),opsi)
    .subscribe((res: Response) => {
      window.location.href="./statuspembayaran";
    })
  }
}