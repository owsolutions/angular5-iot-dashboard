import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { LocationsComponent } from './locations.component';
import { PlacesComponent } from './../index/places/places.component';
import { CommunicateService } from '../communicate.service';
import { appReducersGenerator } from '../app.reducers';


describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LocationsComponent,
        PlacesComponent,
        PageHeaderComponent
      ],
      imports: [
        appReducersGenerator()
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [CommunicateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(component).toBeTruthy();
  }));
});
