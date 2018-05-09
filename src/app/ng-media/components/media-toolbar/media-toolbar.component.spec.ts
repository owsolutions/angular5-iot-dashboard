import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaToolbarComponent } from './media-toolbar.component';

describe('MediaToolbarComponent', () => {
  let component: MediaToolbarComponent;
  let fixture: ComponentFixture<MediaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
