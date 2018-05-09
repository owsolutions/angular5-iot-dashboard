import { TestBed, inject } from '@angular/core/testing';

import { DetailPanelService } from './detail-panel.service';

describe('DetailPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailPanelService]
    });
  });

  it('should be created', inject([DetailPanelService], (service: DetailPanelService) => {
    expect(service).toBeTruthy();
  }));
});
