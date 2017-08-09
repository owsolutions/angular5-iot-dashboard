import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { UserService } from '@app/services/user.service';
import { CommunicateService } from '@app/services/communicate.service';
import { RequestsService } from '@app/services/requests.service';
import { PermissionsService } from '@app/services/permissions.service';
import { MocksService } from '@app/services/mocks.service';

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
        StoreModule.provideStore({}),
        RouterModule,
        RouterTestingModule
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
