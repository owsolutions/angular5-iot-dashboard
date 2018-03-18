import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { PageHeaderComponent } from '@shared/core/page-header/page-header.component';
import { RequestsService } from '@shared/core/services/requests.service';
import { LocationsComponent } from './locations.component';
import { PlacesComponent } from './../index/places/places.component';
import { CommunicateService } from '@shared/core/services/communicate.service';
import { appReducersGenerator } from '@app/app.reducers'; ;
import { ActivatedRoute } from '@angular/router';
import { PermissionsService } from '@shared/core/services/permissions.service';
import { MocksService } from '@shared/core/services/mocks.service';
import { ActionsService } from '@shared/core/services/actions.service';
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
