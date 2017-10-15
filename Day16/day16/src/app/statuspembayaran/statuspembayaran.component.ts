import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-statuspembayaran',
  templateUrl: './statuspembayaran.component.html',
  styleUrls: ['./statuspembayaran.component.css']
})
export class StatuspembayaranComponent implements OnInit {
  dataStatusPembayaran:Object;
  idStatusPembayaran:String;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8889/api/statuspembayaran')
    .subscribe((res: Response) => {
      this.dataStatusPembayaran=res.json();
    })
  }
  statusPembayaranDelete(idStatusPembayaran){
    this.http.delete('http://localhost:8889/api/statuspembayaran/'+idStatusPembayaran)
    .subscribe((res: Response) => {
      window.location.href='./statuspembayaran';
    })
  }

}
