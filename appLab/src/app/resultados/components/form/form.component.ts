import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalleService } from 'src/app/administracion/services/servicioDetalle/detalle.service';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { AtencionDetalleService } from '../../services/atencion-detalle.service';

@Component({
  selector: 'lab-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  group!:FormGroup
  selected = 'En Revisión';
  search:string=''
  examenes:any[]=[]

  records:any[] = []

  metaDataColumns:MetaDataColumn[] = [
    {field: "exam", title: 'EXÁMEN'},
    {field: "result", title: 'RESULTADO'}
  ]

  data:any[]= []
  totalRecords = this.data.length

  constructor(private reference:MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public dataObt:any, private examService:DetalleService) { 
    this.loadExamsDetail()
  }

  ngOnInit(): void {
    this.loadForm()
    this.loadExamsDetail()
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

  loadForm(){
    this.group = new FormGroup({
      _id:new FormControl(this.dataObt?._id),
      patient: new FormControl(this.dataObt?.patient, Validators.required),
      creationDate: new FormControl(this.dataObt?.creationDate),
      state: new FormControl(this.dataObt?.state, Validators.required),
    })
    
  }

  save(){
    const records = this.group.value
    this.reference.close(records)
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip+pageSize)
  }

}
