import { Component, OnInit, ViewChild } from '@angular/core';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PostesService } from '../service/postesService.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import {MatSort} from '@angular/material/sort';

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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private postesService: PostesService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.postesService.getPostes().subscribe(
      postes => {
        this.dataSource.data = postes;
      }

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
        poste: cpyPoste,
        title: action
    };
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
  

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Update') {
        this.dataSource.data.forEach(data => {
          if (data.Id_postes === result.data.Id_postes) {
            this.updateRowData(result.data);
          } 
      });
    }
  });
}
  updateRowData(RowObj) {
  /*this.dataSource.data = this.dataSource.data.filter((value,key)=>{
    if(value.id == row_obj.id){
      console.log(value.adresse);
    }
    return true;
  });*/
  console.log('update row+' + RowObj.adresse);
}

public applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
