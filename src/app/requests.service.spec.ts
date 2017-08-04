import { TestBed, inject } from '@angular/core/testing';

import { RequestsService } from './requests.service';

describe('RequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestsService]
    });
  });

  it('should be created', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));
});
