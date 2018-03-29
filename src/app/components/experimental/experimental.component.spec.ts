import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalComponent } from './experimental.component';

describe('ExperimentalComponent', () => {
  let component: ExperimentalComponent;
  let fixture: ComponentFixture<ExperimentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
