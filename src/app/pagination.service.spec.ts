import { TestBed, inject } from '@angular/core/testing';
import { CommunicateService } from './communicate.service';
import { PaginationRequestService } from './pagination.service';
import { StoreModule } from '@ngrx/store';

describe('PaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaginationRequestService,
        CommunicateService
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
