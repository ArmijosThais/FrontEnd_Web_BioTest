import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url = '/api/pacientes/'

  constructor(private http:HttpClient) { 
  }

  loadPatients():Observable<any>{
    return this.http.get(this.url)
  }
  
  loadPatient(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addPatient(paciente:Patient):Observable<any>{
    return this.http.post(this.url,paciente)
  }

  updatePatient(id:string, paciente:Patient):Observable<any>{
    return this.http.put(this.url+id, paciente)
  }

  deletePatient(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
