import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeBenevoleComponent } from './liste-benevole/liste-benevole.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ListePosteComponent } from './liste-poste/liste-poste.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


import { 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule ,
  MatSortModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSelectModule ,
  MatAutocompleteModule
} from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';




@NgModule({
  declarations: [
    AppComponent,
    ListeBenevoleComponent,
    HeaderComponent,
    ListePosteComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule

  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
