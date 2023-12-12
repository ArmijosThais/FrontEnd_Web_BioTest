import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DownloadComponent } from './components/download/download.component';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
    DownloadComponent,
    KeypadButtonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatBottomSheetModule 
  ],
  exports:[
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    MatTableModule,
    PerfectScrollbarModule,
    MatPaginatorModule,
    FlexLayoutModule,
    DownloadComponent,
    KeypadButtonComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule, 
    MatBottomSheetModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule, 
    MatSelectModule,
    MatTreeModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
