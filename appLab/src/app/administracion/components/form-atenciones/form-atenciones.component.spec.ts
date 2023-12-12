import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAtencionesComponent } from './form-atenciones.component';

describe('FormAtencionesComponent', () => {
  let component: FormAtencionesComponent;
  let fixture: ComponentFixture<FormAtencionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAtencionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAtencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
