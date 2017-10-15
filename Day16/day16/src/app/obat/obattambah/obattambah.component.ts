import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './obattambahmodel';

@Component({
  selector: 'app-obattambah',
  templateUrl: './obattambah.component.html',
  styleUrls: ['./obattambah.component.css']
})
export class ObattambahComponent implements OnInit {
  dataObatTambah:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataObatTambah = new Data();
  }
  obatTambah(dataObatTambah){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdProvinsi : kode, NamaProvinsi : nama});
    this.http.post('http://localhost:8889/api/obat/',JSON.stringify(this.dataObatTambah),opsi)
    .subscribe((res: Response) => {
      window.location.href="./obat";
    })
  }
}