import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  url = '/api/examenes/'

  constructor(private http:HttpClient) { 
  }

  loadExams():Observable<any>{
    return this.http.get(this.url)
  }
  
  loadExam(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addExam(exam:Exam):Observable<any>{
    return this.http.post(this.url,exam)
  }

  updatePatient(id:string, exam:Exam):Observable<any>{
    return this.http.put(this.url+id, exam)
  }

  deletePatient(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
