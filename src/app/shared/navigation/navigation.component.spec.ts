import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { UserService, AuthGuard} from '@app/services/user.service';
import { CommunicateService } from '@app/services/communicate.service';
import { RequestsService } from '@app/services/requests.service';
import { MocksService } from '@app/services/mocks.service';
import { PermissionsService } from '@app/services/permissions.service';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [
        RouterModule,
        RouterTestingModule,
        StoreModule.provideStore({})
      ],
      providers: [
        AuthGuard,
        UserService,
        RequestsService,
        PermissionsService,
        CommunicateService,
        MocksService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
