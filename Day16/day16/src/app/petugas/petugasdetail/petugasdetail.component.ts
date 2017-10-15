import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-petugasdetail',
  templateUrl: './petugasdetail.component.html',
  styleUrls: ['./petugasdetail.component.css']
})
export class PetugasdetailComponent implements OnInit {
  id:string;
  dataDetail:Object;
  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }

  ngOnInit() {
	  if(document.cookie==""){
			window.location.href="./login";
	  } else {
    this.http.get('http://localhost:8889/api/petugas/'+this.id+'?'+document.cookie)
    .subscribe((res: Response) => {
      this.dataDetail=res.json();
    })
  }
  }
}