import { TestBed, inject } from '@angular/core/testing';

import { IotSvgService } from './iot-svg.service';

describe('IotSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IotSvgService]
    });
  });

  it('should be created', inject([IotSvgService], (service: IotSvgService) => {
    expect(service).toBeTruthy();
  }));
});
