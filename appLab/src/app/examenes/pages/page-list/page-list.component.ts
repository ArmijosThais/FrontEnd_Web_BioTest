import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { ExamenService } from '../../services/examen.service';

@Component({
  selector: 'lab-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  selected = 'option2';
  records:any[] = []
  
  metaDataColumns:MetaDataColumn[] = [
    {field: "category", title: 'CATEGORÍA'},
    {field: "name", title: 'EXAMEN'},
    {field: "price", title: 'PRECIO'}
  ]

  data:any[]= []
  examenes:any[] =[];
  totalRecords = this.data.length

  keypadButtons:KeypadButton[] = [
    {icon:"add", tooltip:"AGREGAR", color:"primary", action:"NEW"}
  ]
 
  search:string=''

  constructor(private bottonSheet:MatBottomSheet, private exameneSercice:ExamenService, private dialog:MatDialog, 
    private snackBar:MatSnackBar) { 
      this.loadExams()
  }

  ngOnInit(): void {
  }

  loadExams(){
    this.exameneSercice.loadExams().subscribe(data => {
      this.records = data
      this.examenes=[]
      for (let i = 0; i < this.records.length; i++) {
        if (this.records[i].category.toLowerCase().includes(this.search.toLowerCase())) {
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

  doAction(action:string){
    switch(action){
      case 'DOWNLOAD':
        this.showBottonSheet('Lista de Atenciones', 'atenciones', this.records)
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
