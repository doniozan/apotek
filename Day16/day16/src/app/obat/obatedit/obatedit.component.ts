import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-obatedit',
  templateUrl: './obatedit.component.html',
  styleUrls: ['./obatedit.component.css']
})
export class ObateditComponent implements OnInit {
  id:string;
  dataEdit:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }
  ngOnInit() {
    this.http.get('http://localhost:8889/api/obat/'+this.id)
    .subscribe((res: Response) => {
      this.dataEdit=res.json();
	  debugger;
    })
  }

  simpanObat(id){
    this.http.put('http://localhost:8889/api/obat/'+id,this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href="/obat";
    })
  }
}