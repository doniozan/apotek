import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public kdPetugas : string;
    public NamaPetugas : string;
	public AlamatPetugas : string;
	public NamaKota : string;
	public NamaProvinsi : string;
}