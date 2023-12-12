import { EventEmitter, Injectable, Output } from '@angular/core';

export interface IMenu{
  title: string,
  url: string,
  icon: string,
  whiteIcon: string
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  @Output() disparadorLogin: EventEmitter<any> = new EventEmitter()
  
  private listMenu:IMenu[] = [
    {title: 'Inicio', url: '/inicio', icon:'/assets/icons/home-bl.png', whiteIcon:'/assets/icons/home.png'},
    {title: 'Nosotros', url: '/nosotros', icon: '/assets/icons/group-bl.png', whiteIcon:'/assets/icons/group.png'},
    {title: 'Exámenes', url: '/examenes', icon: '/assets/icons/flask-bl.png', whiteIcon:'/assets/icons/flask.png'},  
    {title: 'Resultados', url: '/resultados', icon: '/assets/icons/profile-bl.png', whiteIcon:'/assets/icons/profile.png'},
    {title: 'Administración', url: '/', icon: '/assets/icons/computer-bl.png', whiteIcon:'/assets/icons/computer.png'}
  ]

  constructor() { }

  getMenu():IMenu[]{
    return[...this.listMenu]
  }

  getMenuByUrl(url:string):IMenu{
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() == url.toLowerCase()
    ) as IMenu
  }

  setAdminURL(){
    try {
      this.getMenuByUrl('/').url='/administracion'
    } catch (error) {
      console.log(error); 
    } 
  }

  setNormalUserURL(){
    try {
      this.getMenuByUrl('/administracion').url='/'
    } catch (error) {
      console.log(error); 
    } 
  }
}

export class AdminMenuService {
  private listMenu:IMenu[] = [
    {title: 'Atenciones', url: '/atenciones', icon:'', whiteIcon:''},
    {title: 'Clientes', url: '/clientes', icon: '', whiteIcon:''},
  ]

  constructor() { }

  getMenu():IMenu[]{
    return[...this.listMenu]
  }

  getMenuByUrl(url:string):IMenu{
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() == url.toLowerCase()
    ) as IMenu
  }
}
