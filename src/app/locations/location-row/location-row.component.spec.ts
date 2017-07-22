import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ILocation } from '../../shared/Definitions';
import { LocationRowComponent } from './location-row.component';

describe('LocationRowComponent', () => {
  let component: LocationRowComponent;
  let fixture: ComponentFixture<LocationRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationRowComponent ]
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
