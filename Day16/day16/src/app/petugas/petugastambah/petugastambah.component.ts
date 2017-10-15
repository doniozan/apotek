import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './petugastambahmodel';

@Component({
  selector: 'app-petugastambah',
  templateUrl: './petugastambah.component.html',
  styleUrls: ['./petugastambah.component.css']
})
export class PetugastambahComponent implements OnInit {
  dataPetugasTambah:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataPetugasTambah = new Data();
  }
  petugasTambah(dataPetugasTambah){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    this.http.post('http://localhost:8889/api/petugas/?'+document.cookie,JSON.stringify(this.dataPetugasTambah),opsi)
    .subscribe((res: Response) => {
		window.location.href="./petugas";
    })
  }
}