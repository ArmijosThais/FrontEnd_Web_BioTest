import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'lab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword=true
  user:string=''
  password:string=''
  url=''
  
  constructor(private menuService:MenuService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  validarUsuario(){
    var user = <HTMLInputElement>document.getElementById('us')
    var password = <HTMLInputElement>document.getElementById('pw')
    if(user.value=='admin'&&password.value=='admin'){
      this.url='/inicio'
      this.menuService.setAdminURL()
      const data = true
      try {
        this.menuService.disparadorLogin.emit(data)
      } catch (error) {
        console.log(error);
        
      }    
      this.showMessage("Bienvenido")
    }else{
      console.log('invalido');
      this.showMessage("Credenciales Incorrectas")
    }
  }

  showMessage(message:string, duration:number=5000){
    this.snackbar.open(message, '', {duration})
  }
}
