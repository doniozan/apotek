import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipepembayaranedit',
  templateUrl: './tipepembayaranedit.component.html',
  styleUrls: ['./tipepembayaranedit.component.css']
})
export class TipepembayaraneditComponent implements OnInit {
  id:string;
  dataEdit:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }
  ngOnInit() {
    this.http.get('http://localhost:8889/api/tipepembayaran/'+this.id)
    .subscribe((res: Response) => {
      this.dataEdit=res.json();
    })
  }
d

  simpanTipePembayaran(id){
	this.http.put('http://localhost:8889/api/tipepembayaran/'+id,this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href="/tipepembayaran";
    })
  }
}