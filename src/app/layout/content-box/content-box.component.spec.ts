import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBoxComponent } from './content-box.component';

describe('ContentBoxComponent', () => {
  let component: ContentBoxComponent;
  let fixture: ComponentFixture<ContentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
