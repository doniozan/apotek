import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexheaderComponent } from './indexheader/indexheader.component';
import { IndexfooterComponent } from './indexfooter/indexfooter.component';
import { IndexsidebarComponent } from './indexsidebar/indexsidebar.component';
import { AksestokoComponent } from './aksestoko/aksestoko.component';
import { PropinsiComponent } from './propinsi/propinsi.component';
import { PropinsidetailComponent } from './propinsi/propinsidetail/propinsidetail.component';
import { PropinsieditComponent } from './propinsi/propinsiedit/propinsiedit.component';
import { PropinsitambahComponent } from './propinsi/propinsitambah/propinsitambah.component';
import { AksestokodetailComponent } from './aksestoko/aksestokodetail/aksestokodetail.component';
import { AksestokoeditComponent } from './aksestoko/aksestokoedit/aksestokoedit.component';
import { AksestokotambahComponent } from './aksestoko/aksestokotambah/aksestokotambah.component';
import { TokoComponent } from './toko/toko.component';
import { TokodetailComponent } from './toko/tokodetail/tokodetail.component';
import { TokoeditComponent } from './toko/tokoedit/tokoedit.component';
import { TokotambahComponent } from './toko/tokotambah/tokotambah.component';
import { PetugasComponent } from './petugas/petugas.component';
import { PetugasdetailComponent } from './petugas/petugasdetail/petugasdetail.component';
import { PetugaseditComponent } from './petugas/petugasedit/petugasedit.component';
import { PetugastambahComponent } from './petugas/petugastambah/petugastambah.component';
import { ObatComponent } from './obat/obat.component';
import { ObatdetailComponent } from './obat/obatdetail/obatdetail.component';
import { ObateditComponent } from './obat/obatedit/obatedit.component';
import { ObattambahComponent } from './obat/obattambah/obattambah.component';
import { TipepembayaranComponent } from './tipepembayaran/tipepembayaran.component';
import { TipepembayarandetailComponent } from './tipepembayaran/tipepembayarandetail/tipepembayarandetail.component';
import { TipepembayaraneditComponent } from './tipepembayaran/tipepembayaranedit/tipepembayaranedit.component';
import { TipepembayarantambahComponent } from './tipepembayaran/tipepembayarantambah/tipepembayarantambah.component';
import { StatuspembayaranComponent } from './statuspembayaran/statuspembayaran.component';
import { StatuspembayarandetailComponent } from './statuspembayaran/statuspembayarandetail/statuspembayarandetail.component';
import { StatuspembayaraneditComponent } from './statuspembayaran/statuspembayaranedit/statuspembayaranedit.component';
import { StatuspembayarantambahComponent } from './statuspembayaran/statuspembayarantambah/statuspembayarantambah.component';
import { StatuspenjualanComponent } from './statuspenjualan/statuspenjualan.component';
import { StatuspenjualandetailComponent } from './statuspenjualan/statuspenjualandetail/statuspenjualandetail.component';
import { StatuspenjualaneditComponent } from './statuspenjualan/statuspenjualanedit/statuspenjualanedit.component';
import { StatuspenjualantambahComponent } from './statuspenjualan/statuspenjualantambah/statuspenjualantambah.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

let routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  //akses toko
  {path:'aksestoko',component:AksestokoComponent},
  {path:'aksestoko/detail/:id',component:AksestokodetailComponent},
  {path:'aksestoko/update/:id',component:AksestokoeditComponent},
  {path:'aksestoko/tambah',component:AksestokotambahComponent},
  //propinsi
  {path:'propinsi',component:PropinsiComponent},
  {path:'propinsi/detail/:id',component:PropinsidetailComponent},
  {path:'propinsi/update/:id',component:PropinsieditComponent},
  {path:'propinsi/tambah',component:PropinsitambahComponent},
  //obat
  {path:'obat',component:ObatComponent},
  {path:'obat/detail/:id',component:ObatdetailComponent},
  {path:'obat/update/:id',component:ObateditComponent},
  {path:'obat/tambah',component:ObattambahComponent},
  //toko
  {path:'toko',component:TokoComponent},
  {path:'toko/detail/:id',component:TokodetailComponent},
  {path:'toko/update/:id',component:TokoeditComponent},
  {path:'toko/tambah',component:TokotambahComponent},
  //petugas
  {path:'petugas',component:PetugasComponent},
  {path:'petugas/detail/:id',component:PetugasdetailComponent},
  {path:'petugas/update/:id',component:PetugaseditComponent},
  {path:'petugas/tambah',component:PetugastambahComponent},
  //status pembayaran
  {path:'statuspembayaran',component:StatuspembayaranComponent},
  {path:'statuspembayaran/detail/:id',component:StatuspembayarandetailComponent},
  {path:'statuspembayaran/update/:id',component:StatuspembayaraneditComponent},
  {path:'statuspembayaran/tambah',component:StatuspembayarantambahComponent},
  //tipe pembayaran
  {path:'tipepembayaran',component:TipepembayaranComponent},
  {path:'tipepembayaran/detail/:id',component:TipepembayarandetailComponent},
  {path:'tipepembayaran/update/:id',component:TipepembayaraneditComponent},
  {path:'tipepembayaran/tambah',component:TipepembayarantambahComponent},
  //status penjualan
  {path:'statuspenjualan',component:StatuspenjualanComponent},
  {path:'statuspenjualan/detail/:id',component:StatuspenjualandetailComponent},
  {path:'statuspenjualan/update/:id',component:StatuspenjualaneditComponent},
  {path:'statuspenjualan/tambah',component:StatuspenjualantambahComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexheaderComponent,
    IndexfooterComponent,
    IndexsidebarComponent,
    AksestokoComponent,
    PropinsiComponent,
    PropinsidetailComponent,
    PropinsieditComponent,
    PropinsitambahComponent,
    AksestokodetailComponent,
    AksestokoeditComponent,
    AksestokotambahComponent,
    TokoComponent,
    TokodetailComponent,
    TokoeditComponent,
    TokotambahComponent,
    PetugasComponent,
    PetugasdetailComponent,
    PetugaseditComponent,
    PetugastambahComponent,
    ObatComponent,
    ObatdetailComponent,
    ObateditComponent,
    ObattambahComponent,
    TipepembayaranComponent,
    TipepembayarandetailComponent,
    TipepembayaraneditComponent,
    TipepembayarantambahComponent,
    StatuspembayaranComponent,
    StatuspembayarandetailComponent,
    StatuspembayaraneditComponent,
    StatuspembayarantambahComponent,
    StatuspenjualanComponent,
    StatuspenjualandetailComponent,
    StatuspenjualaneditComponent,
    StatuspenjualantambahComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }