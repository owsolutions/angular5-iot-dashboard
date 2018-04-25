import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBubbleComponent } from './water-bubble.component';

describe('WaterBubbleComponent', () => {
  let component: WaterBubbleComponent;
  let fixture: ComponentFixture<WaterBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
