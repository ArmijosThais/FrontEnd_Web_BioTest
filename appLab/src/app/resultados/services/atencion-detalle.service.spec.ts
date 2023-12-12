import { TestBed } from '@angular/core/testing';

import { AtencionDetalleService } from './atencion-detalle.service';

describe('AtencionDetalleService', () => {
  let service: AtencionDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtencionDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
