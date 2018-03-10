import { TestBed, inject } from '@angular/core/testing';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';

describe('MocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MocksService,
        PermissionsService
      ]
    });
  });

  it('should be created', inject([MocksService], (service: MocksService) => {
    expect(service).toBeTruthy();
  }));
});
