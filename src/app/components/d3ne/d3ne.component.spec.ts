import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3neComponent } from './d3ne.component';

describe('D3neComponent', () => {
  let component: D3neComponent;
  let fixture: ComponentFixture<D3neComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3neComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3neComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
