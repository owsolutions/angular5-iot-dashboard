import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperBoxComponent } from './helper-box.component';

describe('HelperBoxComponent', () => {
  let component: HelperBoxComponent;
  let fixture: ComponentFixture<HelperBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
