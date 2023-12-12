import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenesRoutingModule } from './examenes-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageListComponent,
  ],
  imports: [
    CommonModule,
    ExamenesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExamenesModule { }
