import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tokoedit',
  templateUrl: './tokoedit.component.html',
  styleUrls: ['./tokoedit.component.css']
})
export class TokoeditComponent implements OnInit {
  id:string;
  dataEdit:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }
  ngOnInit() {
    this.http.get('http://localhost:8889/api/toko/'+this.id)
    .subscribe((res: Response) => {
      this.dataEdit=res.json();
    })
  }

  simpanToko(id){
	  debugger;
    this.http.put('http://localhost:8889/api/toko/'+id,this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href="/toko";
    })
  }
}