import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import jspdf from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

@Component({
  selector: 'lab-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
  }

  exportExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Hoja de Excel.xlsx');
  }
  
  generarPDF(): any {
    var pdf = new jspdf();
    pdf.setProperties({
      title: 'Listado',
    });
    autoTable(pdf, {
      html: 'table',
    });
    return pdf;
  }

  openPDF(){
    this.generarPDF().output('dataurlnewwindow');
  }

  exportPDF() {
    this.generarPDF().save('Listado');
  }

  printPDF() {
    var pdf = this.generarPDF();
    pdf.autoPrint();
    pdf.output('dataurlnewwindow');
  }

}
