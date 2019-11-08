import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBenevoleComponent } from './form-benevole.component';

describe('FormBenevoleComponent', () => {
  let component: FormBenevoleComponent;
  let fixture: ComponentFixture<FormBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
