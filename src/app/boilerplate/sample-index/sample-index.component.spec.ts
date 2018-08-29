import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleIndexComponent } from './sample-index.component';

describe('SampleIndexComponent', () => {
  let component: SampleIndexComponent;
  let fixture: ComponentFixture<SampleIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
