import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statuspenjualanedit',
  templateUrl: './statuspenjualanedit.component.html',
  styleUrls: ['./statuspenjualanedit.component.css']
})
export class StatuspenjualaneditComponent implements OnInit {
  id:string;
  dataEdit:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }
  ngOnInit() {
    this.http.get('http://localhost:8889/api/statuspenjualan/'+this.id)
    .subscribe((res: Response) => {
      this.dataEdit=res.json();
    })
  }
d

  simpanStatusPenjualan(id){
	this.http.put('http://localhost:8889/api/statuspenjualan/'+id,this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href="/statuspenjualan";
    })
  }
}