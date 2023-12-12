import { TestBed } from '@angular/core/testing';

import { Red2Service } from './red2.service';

describe('Red2Service', () => {
  let service: Red2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Red2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
