import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormAtencionesComponent } from '../../components/form-atenciones/form-atenciones.component';
import { Exam } from '../../models/exam.model';
import { DetalleService } from '../../services/servicioDetalle/detalle.service';
import { Red2Service } from '../../services/servicioRedireccion/red2.service';
import { RedireccionService } from '../../services/servicioRedireccion/redireccion.service';

@Component({
  selector: 'lab-page-exams',
  templateUrl: './page-exams.component.html',
  styleUrls: ['./page-exams.component.css']
})
export class PageExamsComponent implements OnInit {
  search:string=''
  guard!:string
  examenes:any[]=[]

  records:any[] = []

  metaDataColumns:MetaDataColumn[] = [
    {field: "attention", title: 'ATENCIÓN'},
    {field: "exam", title: 'EXÁMEN'},
    {field: "result", title: 'RESULTADO'}
  ]

  data:any[]= []
  totalRecords = this.data.length

  constructor(private bottonSheet:MatBottomSheet, private examService:DetalleService, private dialog:MatDialog, 
    private snackBar:MatSnackBar,
    private disparadorRedireccion:RedireccionService) { 
      this.loadExamsDetail()
  }

  ngOnInit(): void {
    this.disparadorRedireccion.disparadorRedireccion.subscribe(data=>{
      this.search=data
      console.log("serach es..."+this.search);
      this.guardar(data)
    })
  }

  guardar(str:string){
    const guardado = str
    this.guard=guardado
  }

/*
  cargarInicial(){
    this.redireccionService2.disparadorRedireccionExamenes.subscribe(data=>{
      this.search=data
      console.log('Search es...'+this.search+'...')
      this.loadAttentions()
    })
  }*/

  loadExamsDetail(){
    this.examService.loadAttentionDetails().subscribe(data => {
      this.records = data
      var detalles=[]
      console.log("guardado es..."+this.guard+"...")
      /*this.examenes=[]
      for (let i = 0; i < this.records.length; i++) {
        if (this.records[i].atencion) {
          this.examenes.push(this.records[i])
        }
      }
      this.records = this.examenes*/
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

  openForm(row:any=null){
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data:row
    }
    const reference:MatDialogRef<FormAtencionesComponent> = this.dialog.open(FormAtencionesComponent,options)

    reference.afterClosed().subscribe((response) => {
      if(!response){return}
      if(response._id){
        const atencion = {...response}
        this.examService.updateAttentionDetail(response._id, atencion).subscribe(() =>{
          this.loadExamsDetail()
          this.showMessage('Registro Actualizado')
        })
      }else{
        const atencion = {...response}
        this.examService.addAttentionDetal(atencion).subscribe(()=>{
          this.loadExamsDetail()  
          this.showMessage('Registro Exitoso')
        })
      }
    })
  }

  delete(id:any){
    this.examService.deleteAttentionDetail(id).subscribe(()=>{
      this.loadExamsDetail()
      this.showMessage('Registro Eliminado')
    })
  }

  doAction(action:string){
    switch(action){
      case 'DOWNLOAD':
        this.showBottonSheet('Lista de Atenciones', 'atenciones', this.records)
        break
      case 'NEW':
        this.openForm()
        break
    }
  }

  showBottonSheet(title:string, fileName:string, data:any){
    this.bottonSheet.open(DownloadComponent, { data: document.getElementById('table')})
  }

  showMessage(message:string, duration:number=5000){
    this.snackBar.open(message, '', {duration})
  }
/*
  cargarDatos(reg: Exam, id: string) {
    console.log(reg)
    var name = <HTMLInputElement>document.getElementById('att')
    name.value = reg.attention
  }*/
}
