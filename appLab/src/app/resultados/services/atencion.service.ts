import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attention } from 'src/app/administracion/models/attention.model';

@Injectable({
  providedIn: 'root'
})
export class AtencionService {
  url = '/api/atenciones/'

  constructor(private http:HttpClient) { 
  }

  loadPatientAttentions(atencion:Attention):Observable<any>{
    return this.http.get(this.url)
  }

  loadAttentions():Observable<any>{
    return this.http.get(this.url)
  }
  
  loadAttention():Observable<any>{
    return this.http.get(this.url)
  }

}
