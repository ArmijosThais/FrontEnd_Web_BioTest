import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    MatCardModule
  ],
  exports: [
    SharedModule,
    InicioRoutingModule,
    CommonModule
  ]
})
export class InicioModule { }
