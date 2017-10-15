import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-petugasedit',
  templateUrl: './petugasedit.component.html',
  styleUrls: ['./petugasedit.component.css']
})
export class PetugaseditComponent implements OnInit {
  id:string;
  dataEdit:Object;
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
      this.dataEdit=res.json();
    })
	  }
  }

  simpanPetugas(id){
	this.http.put('http://localhost:8889/api/petugas/'+id+'?'+document.cookie,this.dataEdit)
    .subscribe((res: Response) => {
		debugger;
      window.location.href="/petugas";
    })
  }
}