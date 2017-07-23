import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ILocation } from '../../shared/Definitions';
import { LocationRowComponent } from './location-row.component';

describe('LocationRowComponent', () => {
  let component: LocationRowComponent;
  let fixture: ComponentFixture<LocationRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationRowComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationRowComponent);
    component = fixture.componentInstance;
    component.location = {
      icon: 'icon',
      name: 'My location'
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
