import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statuspembayarandetail',
  templateUrl: './statuspembayarandetail.component.html',
  styleUrls: ['./statuspembayarandetail.component.css']
})
export class StatuspembayarandetailComponent implements OnInit {
  id:string;
  dataDetail:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }

  ngOnInit() {
    this.http.get('http://localhost:8889/api/statuspembayaran/'+this.id)
    .subscribe((res: Response) => {
      this.dataDetail=res.json();
    })
  }
}