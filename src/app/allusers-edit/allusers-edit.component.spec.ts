import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllusersEditComponent } from './allusers-edit.component';

describe('AllusersEditComponent', () => {
  let component: AllusersEditComponent;
  let fixture: ComponentFixture<AllusersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllusersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllusersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
