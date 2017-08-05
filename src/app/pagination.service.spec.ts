import { TestBed, inject } from '@angular/core/testing';
import { CommunicateService } from './communicate.service';
import { PaginationRequestService } from './pagination.service';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';

import { StoreModule } from '@ngrx/store';

describe('PaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaginationRequestService,
        CommunicateService,
        RequestsService,
        PermissionsService
      ],
      imports: [
        StoreModule.provideStore({})
      ]
    });
  });

  it('should be created', inject([PaginationRequestService], (service: PaginationRequestService) => {
    expect(service).toBeTruthy();
  }));
});
