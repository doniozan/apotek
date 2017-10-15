import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './tipepembayarantambahmodel';

@Component({
  selector: 'app-tipepembayarantambah',
  templateUrl: './tipepembayarantambah.component.html',
  styleUrls: ['./tipepembayarantambah.component.css']
})
export class TipepembayarantambahComponent implements OnInit {
  dataTipePembayaranTambah:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataTipePembayaranTambah = new Data();
  }
  tipePembayaranTambah(dataTipePembayaranTambah){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdProvinsi : kode, NamaProvinsi : nama});
    this.http.post('http://localhost:8889/api/tipepembayaran/',JSON.stringify(this.dataTipePembayaranTambah),opsi)
    .subscribe((res: Response) => {
		debugger;
      window.location.href="./tipepembayaran";
    })
  }
}