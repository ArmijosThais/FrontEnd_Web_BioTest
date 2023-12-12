import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'lab-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records:any[] = [
    {id:'1801', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1802', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1803', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1804', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1805', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1806', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1807', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1808', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1809', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1810', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1811', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1822', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1833', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1844', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1855', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1861', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1872', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1883', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1894', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1705', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1601', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1502', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1403', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1304', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'},
    {id:'1305', name: 'Caludia', lastname:'Romero', phone:'0998365697', address:'Latacunga'}
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
    {icon:"cloud_download", tooltip:"EXPORTAR", color:"basic", action:"DOWNLOAD"},
    {icon:"add", tooltip:"AGREGAR", color:"primary", action:"NEW"}
  ]

  constructor(private bottonSheet:MatBottomSheet, private pacientesService:PacienteService) { 
    this.loadAgencies()
  }

  ngOnInit(): void {
  }

  loadAgencies(){
    this.pacientesService.loadPatients().subscribe(data => {
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

  openForm(){
    
  }

  delete(id:any){

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

}
