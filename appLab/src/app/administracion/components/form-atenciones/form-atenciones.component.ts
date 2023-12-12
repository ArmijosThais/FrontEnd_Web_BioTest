import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamenService } from 'src/app/examenes/services/examen.service';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { Exam } from '../../models/exam.model';
import { DetalleService } from '../../services/servicioDetalle/detalle.service';

@Component({
  selector: 'lab-form-atenciones',
  templateUrl: './form-atenciones.component.html',
  styleUrls: ['./form-atenciones.component.css']
})
export class FormAtencionesComponent implements OnInit {
  title=""
  group!:FormGroup
  selected = 'En Revisión';
  selectedValue!: string;
  resultado!: string;

  search:string=''
  guard!:string
  examenes:any[]=[]

  records:any[] = []

  todos:any[]=[]

  metaDataColumns:MetaDataColumn[] = [
    {field: "exam", title: 'EXÁMEN'},
    {field: "result", title: 'RESULTADO'}
  ]

  data:any[]= []
  totalRecords = this.data.length

  constructor(private reference:MatDialogRef<FormAtencionesComponent>, @Inject(MAT_DIALOG_DATA) public dataObt:any,
  private snackBar:MatSnackBar,
  private examService:DetalleService,
  private exameneSercice:ExamenService) { 
    this.title = dataObt?"EDITAR":"NUEVA ATENCIÓN"
    this.loadExamsDetail()
  }

  ngOnInit(): void {
    this.loadForm()
    this.loadExamsDetail()
  }

  loadForm(){
    this.group = new FormGroup({
      _id:new FormControl(this.dataObt?._id),
      patient: new FormControl(this.dataObt?.patient, Validators.required),
      creationDate: new FormControl(this.dataObt?.creationDate, Validators.required),
      state: new FormControl(this.dataObt?.state, Validators.required),
    })
    
  }

  save(){
    const records = this.group.value
    this.reference.close(records)
  }

  delete(id:any){
    this.examService.deleteAttentionDetail(id).subscribe(()=>{
      this.loadExamsDetail()
      this.showMessage('Registro Eliminado')
    })
  }

  loadExamsDetail(){
    this.examService.loadAttentionDetails().subscribe(data => {
      this.records = data
      this.examenes=[]
      const detalle = this.group.value
      for (let i = 0; i < this.records.length; i++) {
        if (this.records[i].attention==detalle._id) {
          this.examenes.push(this.records[i])
        }
      }
      this.records = this.examenes
      this.totalRecords = this.examenes.length
      this.changePage(0)
    },error => {
      console.log(error);
    });
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip+pageSize)
  }

  showMessage(message:string, duration:number=5000){
    this.snackBar.open(message, '', {duration})
  }

  loadExams(){
    this.exameneSercice.loadExams().subscribe(data => {
      this.todos = data
      var exams=[]
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].category.toLowerCase().includes(this.search.toLowerCase())) {
          exams.push(this.todos[i])
        }
      }
      this.todos = exams
    },error => {
      console.log(error);
    });
  }

  addExam(examen:string){
    const detalle = this.group.value
    var ingreso:Exam={
      attention: detalle._id,
      exam: examen,
      result: ''
    }
    this.examService.addAttentionDetal(ingreso).subscribe(()=>{
      this.loadExamsDetail()
    }) 
  }

  editResult(exam:any){
    const detalle = this.group.value
    var editado:Exam={
      attention: exam.attention,
      exam: exam.exam,
      result: this.resultado
    }
    this.examService.updateAttentionDetail(exam._id,editado).subscribe(()=>{
      this.loadExamsDetail()
    })
  }

}
