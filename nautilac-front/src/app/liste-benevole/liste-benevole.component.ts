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


  benevole: Benevole[] = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

  public generatePdf() {
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    // pdfMake.createPdf(documentDefinition).open();
    pdfMake.createPdf(documentDefinition).download();
   }
}
