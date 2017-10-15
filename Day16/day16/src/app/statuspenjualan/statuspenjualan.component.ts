import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-statuspenjualan',
  templateUrl: './statuspenjualan.component.html',
  styleUrls: ['./statuspenjualan.component.css']
})
export class StatuspenjualanComponent implements OnInit {
  dataStatusPenjualan:Object;
  idStatusPenjualan:String;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8889/api/statuspenjualan')
    .subscribe((res: Response) => {
      this.dataStatusPenjualan=res.json();
    })
  }
  statusPenjualanDelete(idStatusPenjualan){
    this.http.delete('http://localhost:8889/api/statuspenjualan/'+idStatusPenjualan)
    .subscribe((res: Response) => {
      window.location.href='./statuspenjualan';
    })
  }

}
