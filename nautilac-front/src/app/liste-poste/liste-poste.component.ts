import { Component, OnInit, ViewChild } from '@angular/core';


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
    public dialog: MatDialog) { }

  ngOnInit() {
    this.postesService.getPostes().subscribe(
      postes => {
        this.dataSource.data = postes;
        this.isLoading = false;

        console.log(postes);
      },
      error => this.isLoading = false


    );
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
        this.dataSource.data.forEach(data => {
          if (data.Id_postes === result.data.Id_postes) {
            console.log("eheheh"+result.data.adresse);
            this.UpdatePoste(result.data);
          }
        });
      } else if (result.event === 'Supprimer') {
        this.dataSource.data.forEach(data => {
          if (data.Id_postes === result.data.Id_postes) {
            this.DeletePoste(result.data);
          }
        });
      }
    });
  }
  UpdatePoste(RowObj) {
    this.postesService.UpdatePoste(RowObj).subscribe(
      postes => {
        this.dataSource.data = postes;
      }

    );
    console.log('update row+' + RowObj.adresse);
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  DeletePoste(RowObj) {
    /*this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        console.log(value.adresse);
      }
      return true;
    });*/
    console.log('delete row+' + RowObj.adresse);
  }

}
