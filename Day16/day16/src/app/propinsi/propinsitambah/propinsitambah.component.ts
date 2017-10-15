import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './propinsitambahmodel';

@Component({
  selector: 'app-propinsitambah',
  templateUrl: './propinsitambah.component.html',
  styleUrls: ['./propinsitambah.component.css']
})
export class PropinsitambahComponent implements OnInit {
  dataPropinsiTambah:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataPropinsiTambah = new Data();
  }
  propinsiTambah(dataPropinsiTambah){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdProvinsi : kode, NamaProvinsi : nama});
    debugger;
    this.http.post('http://localhost:8889/api/propinsi/',JSON.stringify(this.dataPropinsiTambah),opsi)
    .subscribe((res: Response) => {
      window.location.href="./propinsi";
    })
  }
}