import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBenevoleComponent } from '../dialog-benevole/dialog-benevole.component';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-liste-benevole',
  templateUrl: './liste-benevole.component.html',
  styleUrls: ['./liste-benevole.component.css']
})
export class ListeBenevoleComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  benevoles: Benevole[] = [
    {
      id: 1,
      nom: 'Rouzaud',
      prenom: 'Bryan',
      responsable: null,
      poste: null,
      jour: 10,
      telephone: 612121212,
      permis: 'wololo',
      naissance: new Date(),
      mail: 'brouzoud@brouzmail.com',
      selected: false
    },
    {
      id: 2,
      nom: 'Lamure',
      prenom: 'Valentin',
      responsable: null,
      poste: null,
      jour: 10,
      telephone: 614568212,
      permis: 'wololo',
      naissance: new Date(),
      mail: 'vlamure@brouzmail.com',
      selected: false
    },
    {
      id: 3,
      nom: 'Champeaud',
      prenom: 'Raphael',
      responsable: null,
      poste: null,
      jour: 0o10,
      telephone: 698612172,
      permis: 'wololo',
      naissance: new Date(),
      mail: 'rch@brouzmail.com',
      selected: false
    },
  ];

  displayedColumns: string[] = ['checkbox', 'prenom', 'nom', 'telephone', 'mail', 'bouton'];

  dataSource = new MatTableDataSource<Benevole>();

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.data = this.benevoles;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public generatePdf(benevole: Benevole) {
    const documentDefinition = { content: [
      {text: 'Informations Personnelles : ', fontSize: 25, bold: true},
      ' ',
      {
        text: [
          { text: 'Nom : ', fontSize: 15 },
          { text: benevole.nom , fontSize: 10 },
        ]
      },
      {
        text: [
          { text: 'Prénom : ', fontSize: 15 },
          { text: benevole.prenom , fontSize: 10, alignment: 'right' },
        ]
      },
      {
        text: [
          { text: 'N° Téléphone : ', fontSize: 15 },
          { text: benevole.telephone , fontSize: 10, alignment: 'right' },
        ]
      },
      {
        text: [
          { text: 'Adresse mail : ', fontSize: 15 },
          { text: benevole.mail , fontSize: 10, alignment: 'right' },
        ]
      },
    ]};
    pdfMake.createPdf(documentDefinition).open();
    // pdfMake.createPdf(documentDefinition).download();
   }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public supprimerBenevole(benevole: Benevole) {
    console.log(benevole.selected);
   }

  public openDialog(action, benevoleInput) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      benevole: benevoleInput,
      title: action
    };

    const dialogRef = this.dialog.open(DialogBenevoleComponent, dialogConfig);

  }

  public modifierBenevole(id: number) {
    this.router.navigate(['benevole/' + id]);
  }

}
