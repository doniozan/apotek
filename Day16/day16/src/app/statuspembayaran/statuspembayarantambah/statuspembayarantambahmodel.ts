import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public kdStatusPembayaran : string;
    public NamaStatusPembayaran : string;
}