import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-tipepembayaran',
  templateUrl: './tipepembayaran.component.html',
  styleUrls: ['./tipepembayaran.component.css']
})
export class TipepembayaranComponent implements OnInit {
  dataToko:Object;
  idToko:String;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8889/api/tipepembayaran')
    .subscribe((res: Response) => {
      this.dataToko=res.json();
    })
  }
  tipePembayaranDelete(idTipePembayaran){
    this.http.delete('http://localhost:8889/api/tipepembayaran/'+idTipePembayaran)
    .subscribe((res: Response) => {
      window.location.href='./tipepembayaran';
    })
  }

}
