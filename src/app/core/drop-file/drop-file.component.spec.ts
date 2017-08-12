import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropFileComponent } from './drop-file.component';

describe('DropFileComponent', () => {
  let component: DropFileComponent;
  let fixture: ComponentFixture<DropFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
