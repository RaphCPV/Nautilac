import { Component, OnInit } from '@angular/core';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.component.html',
  styleUrls: ['./liste-poste.component.css']
})

export class ListePosteComponent implements OnInit {
  
  postes_data: Poste[] = [
    {
      id: 1,
      adresse: '13 rue Brouzoud',
      kilometrage: 2
    },
  
  ];
  displayedColumns: string[] = ['position', 'adresse', 'kilometrage', 'actions'];
  dataSource = this.postes_data;

  constructor() { }

  ngOnInit() {
  }

 

  public generatePdf() {
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    // pdfMake.createPdf(documentDefinition).open();
    pdfMake.createPdf(documentDefinition).download();
   }

}
