import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { PacienteService } from '../../services/servicioPacientes/paciente.service';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'lab-page-patients',
  templateUrl: './page-patients.component.html',
  styleUrls: ['./page-patients.component.css']
})
export class PageClientsComponent implements OnInit {
  records:any[] = [
    {ced:'1801', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {ced:'1802', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {ced:'1803', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {ced:'1804', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {ced:'1805', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'}
  ]

  metaDataColumns:MetaDataColumn[] = [
    {field: "id", title: 'CÉDULA'},
    {field: "name", title: 'NOMBRE'},
    {field: "lastname", title: 'APELLIDO'},
    {field: "phone", title: 'TELÉFONO'},
    {field: "address", title: 'DIRECCIÓN'}
  ]

  data:any[]= []
  totalRecords = this.data.length

  keypadButtons:KeypadButton[] = [
    {icon:"add", tooltip:"AGREGAR", color:"primary", action:"NEW"}
  ]

  constructor(private bottonSheet:MatBottomSheet, private pacienteService:PacienteService, private dialog:MatDialog, 
    private snackBar:MatSnackBar) { 
      this.loadPatients()
  }

  ngOnInit(): void {
  }

  loadPatients(){
    this.pacienteService.loadPatients().subscribe(data => {
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
    const reference:MatDialogRef<FormComponent> = this.dialog.open(FormComponent,options)

    reference.afterClosed().subscribe((response) => {
      if(!response){return}
      if(response._id){
        const paciente = {...response}
        this.pacienteService.updatePatient(response._id, paciente).subscribe(() =>{
          this.loadPatients()
          this.showMessage('Registro Actualizado')
        })
      }else{
        const paciente = {...response}
        this.pacienteService.addPatient(paciente).subscribe(()=>{
          this.loadPatients()  
          this.showMessage('Registro Exitoso')
        })
      }
    })
  }

  delete(id:any){
    this.pacienteService.deletePatient(id).subscribe(()=>{
      this.loadPatients()
      this.showMessage('Registro Eliminado')
    })
  }

  doAction(action:string){
    switch(action){
      case 'DOWNLOAD':
        this.showBottonSheet('Lista de Pacientes', 'pacientes', this.records)
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
