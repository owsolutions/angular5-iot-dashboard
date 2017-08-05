import { TestBed, inject } from '@angular/core/testing';
import { ActionsService } from './actions.service';
import { StoreModule } from '@ngrx/store';

describe('ActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActionsService
      ],
      imports: [
        StoreModule.provideStore({})
      ]
    });
  });

  it('should be created', inject([ActionsService], (service: ActionsService) => {
    expect(service).toBeTruthy();
  }));
});
