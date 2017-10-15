import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-obat',
  templateUrl: './obat.component.html',
  styleUrls: ['./obat.component.css']
})
export class ObatComponent implements OnInit {
  dataObat:Object;
  idObat:String;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8889/api/obat')
    .subscribe((res: Response) => {
      this.dataObat=res.json();
    })
  }
  obatDelete(idObat){
    this.http.delete('http://localhost:8889/api/obat/'+idObat)
    .subscribe((res: Response) => {
      window.location.href='./obat';
    })
  }
}
