import { TestBed, inject } from '@angular/core/testing';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';

describe('RequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestsService,
        PermissionsService
      ]
    });
  });

  it('should be created', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));
});
