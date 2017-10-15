import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public kdAkses : string;
    public NamaAkses : string;
	public Keterangan : string;
}