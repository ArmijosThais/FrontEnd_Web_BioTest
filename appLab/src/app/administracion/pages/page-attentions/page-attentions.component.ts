import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormAtencionesComponent } from '../../components/form-atenciones/form-atenciones.component';
import { FormComponent } from '../../components/form/form.component';
import { AtencionService } from '../../services/servicioAtenciones/atencion.service';
import { CambioService } from '../../services/servicioRedireccion/cambio.service';
import { RedireccionService } from '../../services/servicioRedireccion/redireccion.service';

@Component({
  selector: 'lab-page-attentions',
  templateUrl: './page-attentions.component.html',
  styleUrls: ['./page-attentions.component.css']
})
export class PageAttentionsComponent implements OnInit {
  idAtencion!:string

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
    {_id:'014', patient: '1804', date:'22/11/2022', state:'En Revisión'},
    {_id:'015', patient: '1805', date:'22/11/2022', state:'Disponibles'},
    {_id:'016', patient: '1805', date:'22/11/2022', state:'En Revisión'},
    {_id:'017', patient: '1806', date:'22/11/2022', state:'Disponibles'},
    {_id:'018', patient: '1801', date:'22/11/2022', state:'En Revisión'},
    {_id:'019', patient: '1808', date:'22/11/2022', state:'Disponibles'},
    {_id:'020', patient: '1801', date:'22/11/2022', state:'En Revisión'},
  ]
  
  metaDataColumns:MetaDataColumn[] = [
    {field: "_id", title: 'ID'},
    {field: "patient", title: 'PACIENTE'},
    {field: "creationDate", title: 'FECHA'},
    {field: "state", title: 'ESTADO DE RESULTADOS'}
  ]

  data:any[]= []
  totalRecords = this.data.length

  keypadButtons:KeypadButton[] = [
    {icon:"add", tooltip:"AGREGAR", color:"primary", action:"NEW"}
  ]

  constructor(private bottonSheet:MatBottomSheet, private atencionService:AtencionService, private dialog:MatDialog, 
    private snackBar:MatSnackBar,
    private redireccionService:RedireccionService,
    private cambioPaginaService:CambioService) { 
      this.loadAttentions()
  }

  ngOnInit(): void {
  }

  loadAttentions(){
    this.atencionService.loadAttentions().subscribe(data => {
      this.records = data
      this.totalRecords = this.records.length
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
        this.atencionService.updateAttention(response._id, atencion).subscribe(() =>{
          this.loadAttentions()
          this.showMessage('Registro Actualizado')
        })
      }else{
        const atencion = {...response}
        this.atencionService.addAttention(atencion).subscribe(()=>{
          this.loadAttentions()  
          this.showMessage('Registro Exitoso')
        })
      }
    })
  }

  goTo(id:string){
    this.cambioPaginaService.disparadorCambioPagina.emit('examenes')
    this.redireccionService.disparadorRedireccion.emit(id)
  }

  delete(id:any){
    this.atencionService.deleteAttention(id).subscribe(()=>{
      this.loadAttentions()
      this.showMessage('Registro Eliminado')
    })
  }

  doAction(action:string){
    switch(action){
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
