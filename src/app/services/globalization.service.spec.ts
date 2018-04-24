import { TestBed, inject } from '@angular/core/testing';

import { GlobalizationService } from './globalization.service';

describe('GlobalizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalizationService]
    });
  });

  it('should be created', inject([GlobalizationService], (service: GlobalizationService) => {
    expect(service).toBeTruthy();
  }));
});
