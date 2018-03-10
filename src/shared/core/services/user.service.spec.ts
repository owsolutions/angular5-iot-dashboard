import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CommunicateService } from './communicate.service';
import { UserService } from './user.service';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      providers: [
        UserService,
        MocksService,
        CommunicateService,
        RequestsService,
        PermissionsService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
