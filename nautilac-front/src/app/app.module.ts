import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeBenevoleComponent } from './liste-benevole/liste-benevole.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import { ListePosteComponent } from './liste-poste/liste-poste.component';
import { FormBenevoleComponent } from './form-benevole/form-benevole.component';
import { DialogBenevoleComponent } from './dialog-benevole/dialog-benevole.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeBenevoleComponent,
    HeaderComponent,
    ListePosteComponent,
    FormBenevoleComponent,
    DialogBenevoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,

  ],
  entryComponents: [
    DialogBenevoleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
