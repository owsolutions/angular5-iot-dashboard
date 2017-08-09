import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@app/services/user.service';
import { LoginComponent } from './login.component';
import { CommunicateService } from '@app/services/communicate.service';
import { StoreModule } from '@ngrx/store';
import { RequestsService } from '@app/services/requests.service';
import { PermissionsService } from '@app/services/permissions.service';
import { MocksService } from '@app/services/mocks.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        UserService,
        RequestsService,
        PermissionsService,
        MocksService,
        CommunicateService
      ],
      imports: [
        StoreModule.provideStore({}),
        RouterTestingModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
