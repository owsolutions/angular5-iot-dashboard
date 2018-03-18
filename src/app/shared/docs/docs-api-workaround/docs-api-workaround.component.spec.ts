import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsApiWorkaroundComponent } from './docs-api-workaround.component';

describe('DocsApiWorkaroundComponent', () => {
  let component: DocsApiWorkaroundComponent;
  let fixture: ComponentFixture<DocsApiWorkaroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsApiWorkaroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsApiWorkaroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
