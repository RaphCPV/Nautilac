import { Component, OnInit } from '@angular/core';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PostesService } from '../service/postesService.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.component.html',
  styleUrls: ['./liste-poste.component.css']
})

export class ListePosteComponent implements OnInit {
  
  public poste_data_service: Poste[];

  displayedColumns: string[] = ['position', 'adresse', 'kilometrage', 'Benevole','actions'];
  dataSource = this.poste_data_service; 

  constructor(private postesService: PostesService) { }

  ngOnInit() {
    this.postesService.sendGetRequest().subscribe(
      postes => {
        this.poste_data_service = postes;
        console.log(this.poste_data_service.forEach);
        this.dataSource = this.poste_data_service;
      }
    );
  }
  public generatePdf() {
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    // pdfMake.createPdf(documentDefinition).open();
    pdfMake.createPdf(documentDefinition).download();
   }

}
