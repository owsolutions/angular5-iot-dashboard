import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsComponent } from './gps.component';

describe('GpsComponent', () => {
  let component: GpsComponent;
  let fixture: ComponentFixture<GpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
