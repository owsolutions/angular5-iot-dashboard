import { TestBed, inject } from '@angular/core/testing';
import { CommunicateService } from './communicate.service';
import { PaginationRequestService } from './pagination.service';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
import { ActionsService } from './actions.service';
import { StoreModule } from '@ngrx/store';

describe('PaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaginationRequestService,
        CommunicateService,
        RequestsService,
        PermissionsService,
        ActionsService,
        MocksService
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
