import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { PageHeaderComponent } from '@app/core/page-header/page-header.component';
import { RequestsService } from '@app/core/services/requests.service';
import { LocationsComponent } from './locations.component';
import { PlacesComponent } from './../index/places/places.component';
import { CommunicateService } from '@app/core/services/communicate.service';
import { appReducersGenerator } from '@app/core/app.reducers'; ;
import { ActivatedRoute } from '@angular/router';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';
import { ActionsService } from '@app/core/services/actions.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


class MockActivatedRoute extends ActivatedRoute {
    constructor() {
      super();
      this.params = Observable.of({id: '5'});
    }
}
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
      providers: [
        CommunicateService,
        MockActivatedRoute,
        RequestsService,
        PermissionsService,
        MocksService,
        ActionsService
      ]
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
