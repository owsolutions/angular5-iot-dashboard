import { TestBed, inject } from '@angular/core/testing';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
describe('RequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestsService,
        PermissionsService,
        MocksService
      ]
    });
  });

  it('should be created', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));
});
