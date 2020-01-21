import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsCreateComponent } from './visits-create.component';

describe('VisitsCreateComponent', () => {
  let component: VisitsCreateComponent;
  let fixture: ComponentFixture<VisitsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
