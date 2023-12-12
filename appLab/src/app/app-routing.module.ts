import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {path:'', component:PageLoginComponent},
  {path:'inicio', loadChildren:() => import("./inicio/inicio.module").then((m) => m.InicioModule)},
  {path:'nosotros', loadChildren:() => import("./nosotros/nosotros.module").then((m) => m.NosotrosModule)},
  {path:'examenes',loadChildren:() => import("./examenes/examenes.module").then((m) => m.ExamenesModule)},
  {path:'resultados', loadChildren:() => import("./resultados/resultados.module").then((m) => m.ResultadosModule)},
  {path:'administracion', loadChildren:() => import("./administracion/administracion.module").then((m) => m.AdministracionModule)}, 
  {path:'pacientes',loadChildren:() => import("./pacientes/pacientes.module").then((m) => m.PacientesModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
