import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesEditComponent } from './businesses-edit.component';

describe('BusinessesEditComponent', () => {
  let component: BusinessesEditComponent;
  let fixture: ComponentFixture<BusinessesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
