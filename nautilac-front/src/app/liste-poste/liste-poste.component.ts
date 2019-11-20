import { Component, OnInit, ViewChild , ChangeDetectorRef } from '@angular/core';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PostesService } from '../service/postesService.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatSort } from '@angular/material/sort';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.component.html',
  styleUrls: ['./liste-poste.component.css']
})

export class ListePosteComponent implements OnInit {

  displayedColumns: string[] = ['position', 'adresse', 'kilometrage', 'parcours', 'Benevole', 'actions'];
  dataSource = new MatTableDataSource<Poste>();
  isLoading = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private postesService: PostesService,
    public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.refresh();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  openDialog(action, Poste) {
    let cpyPoste: Poste;
    cpyPoste = Poste;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      poste: Poste,
      title: action
    };
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Valider') {
        console.log(this.dataSource.data)
;        this.dataSource.data.forEach(data => {
          if (data.Id_postes === result.data.Id_postes) {
            this.UpdatePoste(result.data);
          }
        });
      } else if (result.event === 'Supprimer') {
        this.dataSource.data.forEach(data => {
          if (data.Id_postes === result.data.Id_postes) {
            this.DeletePoste(result.data);
          }
        });
      } else if (result.event === 'Ajouter') {
        this.AddPoste(result.data);
      }
    });
  }

  UpdatePoste(RowObj) {
    this.postesService.UpdatePoste(RowObj).subscribe(
      postes => {
        this.dataSource.data = postes;
        this.refresh();

      }

    );
    console.log('update row+' + RowObj.adresse);
    this.refresh();

  }

  AddPoste(RowObj) {
    this.postesService.AddPoste(RowObj).subscribe(
      postes => {
        this.dataSource.data = postes;
        this.refresh();

      }

    );
    console.log('add row+' + RowObj.adresse);

 
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  DeletePoste(RowObj) {
    this.postesService.DeletePoste(RowObj).subscribe(
      postes => {
        this.dataSource.data = postes;
        this.refresh();

      }

    );
    console.log('delete row+' + RowObj.adresse);

  }

  refresh(){
    this.postesService.getPostes().subscribe(
      postes => {
        this.dataSource.data = postes;
        this.isLoading = false;

        console.log(postes);
      },
      error => this.isLoading = false

      
    );
  }

}
