import { TestBed, inject } from '@angular/core/testing';

import { NgMediaService } from './public.service';

describe('NgMediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgMediaService]
    });
  });

  it('should be created', inject([NgMediaService], (service: NgMediaService) => {
    expect(service).toBeTruthy();
  }));
});
