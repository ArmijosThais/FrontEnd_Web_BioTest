import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CambioService {
  @Output() disparadorCambioPagina: EventEmitter<any> = new EventEmitter()
  
  constructor() { }
}
