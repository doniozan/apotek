import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-petugas',
  templateUrl: './petugas.component.html',
  styleUrls: ['./petugas.component.css']
})
export class PetugasComponent implements OnInit {
  dataPetugas:Object;
  idPetugas:String;
  constructor(private http:Http) { }

  ngOnInit() {
	  if(document.cookie==""){
			window.location.href="./login";
	  } else {
    this.http.get('http://localhost:8889/api/petugas?'+document.cookie)
    .subscribe((res: Response) => {
      this.dataPetugas=res.json();
    })
	  }
  }
  petugasDelete(idPetugas){
    this.http.delete('http://localhost:8889/api/petugas/'+idPetugas+'?'+document.cookie)
    .subscribe((res: Response) => {
      window.location.href='./petugas';
    })
  }

}
