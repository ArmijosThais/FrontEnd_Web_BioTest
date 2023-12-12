import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class NosotrosModule { }
