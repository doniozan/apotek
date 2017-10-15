import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public kdToko : string;
    public NamaToko : string;
	public AlamatToko : string;
	public NamaKota : string;
	public NamaProvinsi : string;
}