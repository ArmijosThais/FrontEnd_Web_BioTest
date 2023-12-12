import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedireccionService {
  @Output() disparadorRedireccion: EventEmitter<any> = new EventEmitter()

  constructor() { }
}
