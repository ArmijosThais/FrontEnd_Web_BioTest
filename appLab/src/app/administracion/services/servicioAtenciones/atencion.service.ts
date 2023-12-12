import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attention } from '../../models/attention.model';

@Injectable({
  providedIn: 'root'
})
export class AtencionService {
  url = '/api/atenciones/'

  constructor(private http:HttpClient) { 
  }

  loadAttentions():Observable<any>{
    return this.http.get(this.url)
  }

  loadAttention(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addAttention(atencion:Attention):Observable<any>{
    return this.http.post(this.url,atencion)
  }

  updateAttention(id:string, atencion:Attention):Observable<any>{
    return this.http.put(this.url+id, atencion)
  }

  deleteAttention(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
