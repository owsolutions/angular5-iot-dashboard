import { TestBed, inject } from '@angular/core/testing';

import { GeneralInterceptorService } from './general-interceptor.service';

describe('GeneralInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralInterceptorService]
    });
  });

  it('should be created', inject([GeneralInterceptorService], (service: GeneralInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
