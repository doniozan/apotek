import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-aksestoko',
  templateUrl: './aksestoko.component.html',
  styleUrls: ['./aksestoko.component.css']
})
export class AksestokoComponent implements OnInit {
  dataAkses:Object;
  idAkses:String;
  constructor(private http:Http) { }

  ngOnInit() {
	  if(document.cookie==""){
			window.location.href="./login";
	  } else {
    this.http.get('http://localhost:8889/api/kodeakses')
    .subscribe((res: Response) => {
      this.dataAkses=res.json();
    })
	  }
  }
  kodeAksesDelete(idAkses){
    this.http.delete('http://localhost:8889/api/kodeakses/'+idAkses)
    .subscribe((res: Response) => {
      window.location.href='./aksestoko';
    })
  }
}