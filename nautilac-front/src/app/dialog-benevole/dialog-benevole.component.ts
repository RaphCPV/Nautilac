import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-benevole',
  templateUrl: './dialog-benevole.component.html',
  styleUrls: ['./dialog-benevole.component.css']
})
export class DialogBenevoleComponent implements OnInit {

  myControl = new FormControl();
  action: string;
  benevole: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBenevoleComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data) {
      if (data.title === 'Ajouter') {
        this.action = data.title;
        this.benevole = {...data};

      } else {
        this.benevole = data.benevole;
        this.action = data.title;
      }

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
