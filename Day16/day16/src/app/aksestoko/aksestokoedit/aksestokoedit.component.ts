import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aksestokoedit',
  templateUrl: './aksestokoedit.component.html',
  styleUrls: ['./aksestokoedit.component.css']
})
export class AksestokoeditComponent implements OnInit {
  id:string;
  dataEdit:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }
  ngOnInit() {
    this.http.get('http://localhost:8889/api/kodeakses/'+this.id)
    .subscribe((res: Response) => {
      this.dataEdit=res.json();
    })
  }

  simpanAksesToko(id){
	  debugger;
    this.http.put('http://localhost:8889/api/kodeakses/'+id,this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href="/aksestoko";
    })
  }
}