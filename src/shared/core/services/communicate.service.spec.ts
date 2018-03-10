import { TestBed, inject } from '@angular/core/testing';
import { appReducersGenerator } from '@app/app.reducers';
import { CommunicateService } from './communicate.service';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';

describe('CommunicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        appReducersGenerator()
      ],
      providers: [
        CommunicateService,
        RequestsService,
        PermissionsService,
        MocksService
      ]
    });
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(service).toBeTruthy();
  }));
});
