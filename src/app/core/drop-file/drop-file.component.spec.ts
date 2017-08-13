import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DropFileComponent } from './drop-file.component';

describe('DropFileComponent', () => {
  let component: DropFileComponent;
  let fixture: ComponentFixture<DropFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropFileComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
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
