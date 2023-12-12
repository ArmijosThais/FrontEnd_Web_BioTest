import { Component, OnInit } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'lab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin= false
  user='Iniciar Sesión'
  listMenu:IMenu[]
  url=''

  constructor(private menuService:MenuService) { 
    this.listMenu = menuService.getMenu()
  }

  ngOnInit(): void {
    this.menuService.disparadorLogin.subscribe(data =>{
      if(data){
        this.setAdmin()
      }    
    })
    
  }

  setAdmin(){
    this.admin=true
    this.user='Administrador'
    this.menuService.setAdminURL()
  }

  setNormalUser(){
    this.admin=false
    this.user='Iniciar Sesión'
    this.menuService.setNormalUserURL()
  }

  changeAdmin(){
    if(this.admin){
      this.setNormalUser()
    }
  }

/*
  changeAdmin(){
    if(this.admin){
      this.admin=!this.admin
      this.user='Iniciar Sesión'
      this.menuService.setNormalUserURL()
    }else{
      this.menuService.disparadorLogin.subscribe(data =>{
        if(data){
          this.user='Administrador'
          this.admin=!this.admin
          this.menuService.setAdminURL()
        }        
      })
    }
  }*/
}
