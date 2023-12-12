import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lab-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output() onChangePage:EventEmitter<number> = new EventEmitter<number>
  @Input() lenght!:number
  pageSize = environment.PAGE_SIZE
  currentPage = 0

  constructor(private paginator: MatPaginatorIntl) {
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.paginator.firstPageLabel = "Primera Pagina";
    this.paginator.nextPageLabel = "Siguiente";
    this.paginator.lastPageLabel = "Ultima Pagina";
    this.paginator.previousPageLabel = "Anterior";
  }

  ngOnInit(): void {
  }

  changePage(event:any){
    this.currentPage = event.pageIndex ?? event.value
    this.onChangePage.emit(this.currentPage)
  }

}
