import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormComponent } from '../../components/form/form.component';
import { AtencionService } from '../../services/atencion.service';

@Component({
  selector: 'lab-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records:any[] = [
    {_id:'001', patient: '1801', date:'22/11/2022', state:'Disponibles'},
    {_id:'002', patient: '1802', date:'22/11/2022', state:'En Revisión'},
    {_id:'003', patient: '1803', date:'22/11/2022', state:'Disponibles'},
    {_id:'004', patient: '1804', date:'22/11/2022', state:'En Revisión'},
    {_id:'005', patient: '1805', date:'22/11/2022', state:'Disponibles'},
    {_id:'006', patient: '1806', date:'22/11/2022', state:'En Revisión'},
    {_id:'007', patient: '1807', date:'22/11/2022', state:'Disponibles'},
    {_id:'008', patient: '1808', date:'22/11/2022', state:'En Revisión'},
    {_id:'009', patient: '1809', date:'22/11/2022', state:'Disponibles'},
    {_id:'010', patient: '1801', date:'22/11/2022', state:'En Revisión'},
    {_id:'011', patient: '1803', date:'22/11/2022', state:'Disponibles'},
    {_id:'012', patient: '1804', date:'22/11/2022', state:'En Revisión'},
    {_id:'013', patient: '1803', date:'22/11/2022', state:'Disponibles'},
  ]
  
  metaDataColumns:MetaDataColumn[] = [
    {field: "_id", title: 'ID'},
    {field: "patient", title: 'PACIENTE'},
    {field: "creationDate", title: 'FECHA'},
    {field: "state", title: 'ESTADO DE RESULTADOS'}
  ]

  data:any[]= []
  atenciones:any[] =[];
  totalRecords = this.data.length

  keypadButtons:KeypadButton[] = [
    {icon:"cloud_download", tooltip:"EXPORTAR", color:"basic", action:"DOWNLOAD"},
    {icon:"add", tooltip:"AGREGAR", color:"primary", action:"NEW"}
  ]
 
  search:string=''

  constructor(private bottonSheet:MatBottomSheet, private atencionService:AtencionService, private dialog:MatDialog, 
    private snackBar:MatSnackBar) { 
      this.loadAttentions()
  }

  ngOnInit(): void {
  }

  loadAttentions(){
    this.atencionService.loadAttentions().subscribe(data => {
      this.records = data
      this.atenciones=[]
      for (let i = 0; i < this.records.length; i++) {
        if (this.records[i].patient.toLowerCase() == this.search.toLowerCase()) {
          this.atenciones.push(this.records[i])
        }
      }
      this.records = this.atenciones
      this.totalRecords = this.atenciones.length
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
    if(row.state=='Disponible'){
      const options = {
        panelClass: 'panel-container',
        disableClose: true,
        data:row
      }
      const reference:MatDialogRef<FormComponent> = this.dialog.open(FormComponent,options)
  
      reference.afterClosed().subscribe((response) => {
        if(!response){return}
        if(response._id){
          const atencion = {...response}
  
        }else{}
      })
    }else{
      this.showMessage("Tus exámenes aún están en revisión")
    }
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

}
