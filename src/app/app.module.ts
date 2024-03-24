import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupaComponent } from './grupa/grupa.component';
import { ProjekatComponent } from './projekat/projekat.component';
import { SmerComponent } from './smer/smer.component';
import { StudentComponent } from './student/student.component';
import { ProjekatService } from './service/projekat.service';
import { GrupaService } from './service/grupa.service';
import { SmerService } from './service/smer.service';
import { StudentService } from './service/student.service';
import { HomeComponent } from './core/home/home.component';

import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatList, MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { Routes, RouterModule } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { GrupaDialogComponent } from './dialog/grupa-dialog/grupa-dialog.component';
import { SmerDialogComponent } from './dialog/smer-dialog/smer-dialog.component';
import { StudentDialogComponent } from './dialog/student-dialog/student-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProjekatDialogComponent } from './dialog/projekat-dialog/projekat-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    GrupaComponent,
    ProjekatComponent,
    SmerComponent,
    StudentComponent,
    HomeComponent,
    GrupaDialogComponent,
    SmerDialogComponent,
    StudentDialogComponent,
    ProjekatComponent,
    ProjekatDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    RouterModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    FormsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue:'en-GB'},ProjekatService,GrupaService,SmerService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
