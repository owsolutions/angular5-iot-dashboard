import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStatusComponent } from './quick-status.component';

describe('QuickStatusComponent', () => {
  let component: QuickStatusComponent;
  let fixture: ComponentFixture<QuickStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
