import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-form-benevole',
  templateUrl: './form-benevole.component.html',
  styleUrls: ['./form-benevole.component.css']
})
export class FormBenevoleComponent implements OnInit {

  creation = false;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let param;
    this.activatedRoute.paramMap.subscribe(
      params => {
        param = params.get('id');
        if (param === 'new') {
          this.creation = true;
        }
      }
    );
  }

}
