import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllusersCreateComponent } from './allusers-create.component';

describe('AllusersCreateComponent', () => {
  let component: AllusersCreateComponent;
  let fixture: ComponentFixture<AllusersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllusersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllusersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
