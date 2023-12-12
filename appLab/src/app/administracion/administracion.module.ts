import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { PageClientsComponent } from './pages/page-patients/page-patients.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageAttentionsComponent } from './pages/page-attentions/page-attentions.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PageExamsComponent } from './pages/page-exams/page-exams.component';
import { FormComponent } from './components/form/form.component';
import { FormAtencionesComponent } from './components/form-atenciones/form-atenciones.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageListComponent,
    PageClientsComponent,
    PageAttentionsComponent,
    PageExamsComponent,
    FormComponent,
    FormAtencionesComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatIconModule, 
    FlexLayoutModule ,
    MatPaginatorModule ,
    MatButtonToggleModule,
    FormsModule,
    FlexModule
  ]
})
export class AdministracionModule { }
