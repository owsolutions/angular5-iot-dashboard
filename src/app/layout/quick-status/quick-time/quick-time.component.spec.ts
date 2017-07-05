import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTimeComponent } from './quick-time.component';

describe('QuickTimeComponent', () => {
  let component: QuickTimeComponent;
  let fixture: ComponentFixture<QuickTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
