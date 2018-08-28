import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfNotEnglishComponent } from './if-not-english.component';

describe('IfNotEnglishComponent', () => {
  let component: IfNotEnglishComponent;
  let fixture: ComponentFixture<IfNotEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfNotEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfNotEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
