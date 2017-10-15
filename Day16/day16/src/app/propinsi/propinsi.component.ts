import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-propinsi',
  templateUrl: './propinsi.component.html',
  styleUrls: ['./propinsi.component.css']
})
export class PropinsiComponent implements OnInit {
  dataPropinsi:Object;
  idPropinsi:String;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8889/api/propinsi')
    .subscribe((res: Response) => {
      this.dataPropinsi=res.json();
    })
  }
  propinsiDelete(idPropinsi){
    this.http.delete('http://localhost:8889/api/propinsi/'+idPropinsi)
    .subscribe((res: Response) => {
      window.location.href='./propinsi';
    })
  }

}
