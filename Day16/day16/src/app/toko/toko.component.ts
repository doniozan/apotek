import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-toko',
  templateUrl: './toko.component.html',
  styleUrls: ['./toko.component.css']
})
export class TokoComponent implements OnInit {
  dataToko:Object;
  idToko:String;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8889/api/toko')
    .subscribe((res: Response) => {
      this.dataToko=res.json();
    })
  }
  tokoDelete(idToko){
    this.http.delete('http://localhost:8889/api/toko/'+idToko)
    .subscribe((res: Response) => {
      window.location.href='./toko';
    })
  }

}
