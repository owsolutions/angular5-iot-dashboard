import { TestBed, inject } from '@angular/core/testing';

import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService]
    });
  });

  it('should be created', inject([PaginationService], (service: PaginationService) => {
    expect(service).toBeTruthy();
  }));
});
