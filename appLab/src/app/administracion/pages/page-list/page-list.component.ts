import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { CambioService } from '../../services/servicioRedireccion/cambio.service';
import { Red2Service } from '../../services/servicioRedireccion/red2.service';
import { RedireccionService } from '../../services/servicioRedireccion/redireccion.service';

@Component({
  selector: 'lab-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  path:string = 'atenciones'
  attentionID:string=''

  constructor(private cambioPaginaService:CambioService, private redireccionService:RedireccionService, private redireccionService2:Red2Service) { }

  ngOnInit(): void {
  }

  sendPath(path:string){
    this.path = path
  }

  getPath(){
    return this.path
  }

}
