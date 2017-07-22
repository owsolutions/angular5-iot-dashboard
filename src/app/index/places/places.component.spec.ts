import { NO_ERRORS_SCHEMA } from '@angular/core';
import { appReducersGenerator } from '../../app.reducers';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesComponent } from './places.component';

describe('PlacesComponent', () => {
  let component: PlacesComponent;
  let fixture: ComponentFixture<PlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        appReducersGenerator()
      ],
      declarations: [ PlacesComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
