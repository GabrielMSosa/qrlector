import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ok } from 'assert';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrvalidateService {
  info:string="ok";

  constructor(mihttp:HttpClient) { }
/*
   BuscarQR (dato:string):Observable<string> {
    
return this.info;
  }
  */



}
