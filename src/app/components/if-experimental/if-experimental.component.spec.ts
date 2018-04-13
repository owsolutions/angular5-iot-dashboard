import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfExperimentalComponent } from './if-experimental.component';

describe('IfExperimentalComponent', () => {
  let component: IfExperimentalComponent;
  let fixture: ComponentFixture<IfExperimentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfExperimentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfExperimentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
