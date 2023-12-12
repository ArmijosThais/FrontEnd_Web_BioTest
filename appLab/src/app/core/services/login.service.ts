import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() disparadorOpenLogin: EventEmitter<any> = new EventEmitter()
  
  constructor() { }
}
