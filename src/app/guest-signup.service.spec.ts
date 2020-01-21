import { TestBed } from '@angular/core/testing';

import { GuestSignupService } from './guest-signup.service';

describe('GuestSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestSignupService = TestBed.get(GuestSignupService);
    expect(service).toBeTruthy();
  });
});
