import { TestBed, inject } from '@angular/core/testing';

import { AclService } from './acl.service';

describe('AclService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AclService]
    });
  });

  it('should be created', inject([AclService], (service: AclService) => {
    expect(service).toBeTruthy();
  }));
});
