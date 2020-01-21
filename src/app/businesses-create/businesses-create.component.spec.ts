import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesCreateComponent } from './businesses-create.component';

describe('BusinessesCreateComponent', () => {
  let component: BusinessesCreateComponent;
  let fixture: ComponentFixture<BusinessesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
