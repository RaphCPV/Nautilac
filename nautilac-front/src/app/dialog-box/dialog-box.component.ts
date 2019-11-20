import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  myControl = new FormControl();
  action: string;
  poste: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) data) {
    if (data.title === 'Ajouter') {
      this.action = data.title;
      this.poste = {...data};

    } else {
      this.poste = data.poste;
      this.action = data.title;
    }


  }

  doAction() {
    this.dialogRef.close({
      event: this.action,
      data: this.poste
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }


}
