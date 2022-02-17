import { TestBed } from '@angular/core/testing';

import { Email.ServiceService } from './email.service.service';

describe('Email.ServiceService', () => {
  let service: Email.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Email.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
