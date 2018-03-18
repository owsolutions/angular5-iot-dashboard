import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { UserService } from '@shared/core/services/user.service';
import { CommunicateService } from '@shared/core/services/communicate.service';
import { RequestsService } from '@shared/core/services/requests.service';
import { PermissionsService } from '@shared/core/services/permissions.service';
import { MocksService } from '@shared/core/services/mocks.service';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      providers: [
        UserService,
        CommunicateService,
        RequestsService,
        PermissionsService,
        MocksService
      ],
      imports: [
        StoreModule.forRoot({}),
        RouterModule,
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            redirectTo: '/'
          }
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});