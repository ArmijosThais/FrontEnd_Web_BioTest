import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attention } from 'src/app/administracion/models/attention.model';
import { Exam } from 'src/app/administracion/models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class AtencionDetalleService {
  url = '/api/atencionesDet/'

  constructor(private http:HttpClient) { 
  }

  loadAttentions():Observable<any>{
    return this.http.get(this.url)
  }
  
  loadAttention():Observable<any>{
    return this.http.get(this.url)
  }
}
