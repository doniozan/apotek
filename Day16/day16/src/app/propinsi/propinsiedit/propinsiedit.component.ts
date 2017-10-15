import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propinsiedit',
  templateUrl: './propinsiedit.component.html',
  styleUrls: ['./propinsiedit.component.css']
})
export class PropinsieditComponent implements OnInit {
  id:string;
  dataEdit:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }
  ngOnInit() {
    this.http.get('http://localhost:8889/api/propinsi/'+this.id)
    .subscribe((res: Response) => {
      this.dataEdit=res.json();
    })
  }

  simpanPropinsi(id){
    this.http.put('http://localhost:8889/api/propinsi/'+id,this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href="/propinsi";
    })
  }
}