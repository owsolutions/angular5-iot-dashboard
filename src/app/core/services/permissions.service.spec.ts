import { TestBed, inject } from '@angular/core/testing';

import { PermissionsService } from './permissions.service';

describe('PermissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionsService]
    });
  });

  it('should be created', inject([PermissionsService], (service: PermissionsService) => {
    expect(service).toBeTruthy();
  }));
});
