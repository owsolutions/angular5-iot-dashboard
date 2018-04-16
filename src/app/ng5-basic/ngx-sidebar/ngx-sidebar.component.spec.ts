import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSidebarComponent } from './ngx-sidebar.component';

describe('NgxSidebarComponent', () => {
  let component: NgxSidebarComponent;
  let fixture: ComponentFixture<NgxSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
