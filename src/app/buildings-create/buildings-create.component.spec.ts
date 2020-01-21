import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsCreateComponent } from './buildings-create.component';

describe('BuildingsCreateComponent', () => {
  let component: BuildingsCreateComponent;
  let fixture: ComponentFixture<BuildingsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
