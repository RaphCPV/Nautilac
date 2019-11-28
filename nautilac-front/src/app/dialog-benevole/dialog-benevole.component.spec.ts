import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBenevoleComponent } from './dialog-benevole.component';

describe('DialogBenevoleComponent', () => {
  let component: DialogBenevoleComponent;
  let fixture: ComponentFixture<DialogBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
