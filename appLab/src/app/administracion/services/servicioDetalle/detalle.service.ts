import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  url = '/api/atencionesDet/'

  constructor(private http:HttpClient) { 
  }

  loadAttentionDetails():Observable<any>{
    return this.http.get(this.url)
  }

  loadAttentionDetail(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addAttentionDetal(atencion:any):Observable<any>{
    return this.http.post(this.url,atencion)
  }

  updateAttentionDetail(id:string, atencion:Exam):Observable<any>{
    return this.http.put(this.url+id, atencion)
  }

  deleteAttentionDetail(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
