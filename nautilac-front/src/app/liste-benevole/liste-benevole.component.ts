import { Component, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-liste-benevole',
  templateUrl: './liste-benevole.component.html',
  styleUrls: ['./liste-benevole.component.css']
})
export class ListeBenevoleComponent implements OnInit {


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
      mail: 'brouzoud@brouzmail.com'
    },
    {
      id: 2,
      nom: 'Lamure',
      prenom: 'Valentin',
      responsable: null,
      poste: null,
      jour: 10,
      telephone: 612121212,
      permis: 'wololo',
      naissance: new Date(),
      mail: 'vlamure@brouzmail.com'
    },
    {
      id: 3,
      nom: 'Champeaud',
      prenom: 'Raphael',
      responsable: null,
      poste: null,
      jour: 0o10,
      telephone: 612121212,
      permis: 'wololo',
      naissance: new Date(),
      mail: 'rch@brouzmail.com'
    },
  ];

  displayedColumns: string[] = ['prenom', 'nom', 'telephone', 'mail', 'bouton'];

  constructor() { }

  ngOnInit() {
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
}
