import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  action:string;
  poste:Poste;
 
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) data) {
    this.poste =  data.poste;
    this.action = data.title;
  }
 
  doAction(){
    console.log("datajhziha" + this.poste.adresse);
    this.dialogRef.close({event : this.action,
                          data: this.poste});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
 

}
