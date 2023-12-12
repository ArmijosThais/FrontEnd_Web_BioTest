import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Red2Service {
  @Output() disparadorRedireccionExamenes: EventEmitter<any> = new EventEmitter()
  constructor() { }
}
