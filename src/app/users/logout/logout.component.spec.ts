import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../user.service';
import { CommunicateService } from '../../communicate.service';
import { StoreModule } from '@ngrx/store';
import { RequestsService } from '../../requests.service';
import { PermissionsService } from '../../permissions.service';
import { MocksService } from '../../mocks.service';

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
