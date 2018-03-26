import { TestBed, inject } from '@angular/core/testing';

import { SidebarControllerService } from './sidebar-controller.service';

describe('SidebarControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarControllerService]
    });
  });

  it('should be created', inject([SidebarControllerService], (service: SidebarControllerService) => {
    expect(service).toBeTruthy();
  }));
});
