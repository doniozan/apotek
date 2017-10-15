import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statuspembayaranedit',
  templateUrl: './statuspembayaranedit.component.html',
  styleUrls: ['./statuspembayaranedit.component.css']
})
export class StatuspembayaraneditComponent implements OnInit {
  id:string;
  dataEdit:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }
  ngOnInit() {
    this.http.get('http://localhost:8889/api/statuspembayaran/'+this.id)
    .subscribe((res: Response) => {
      this.dataEdit=res.json();
    })
  }
d

  simpanStatusPembayaran(id){
	this.http.put('http://localhost:8889/api/statuspembayaran/'+id,this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href="/statuspembayaran";
    })
  }
}