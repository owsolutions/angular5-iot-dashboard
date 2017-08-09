import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService, AuthGuard} from '../../user.service';
import { CommunicateService } from '../../communicate.service';
import { RequestsService } from '../../requests.service';
import { MocksService } from '../../mocks.service';
import { PermissionsService } from '../../permissions.service';
import { StoreModule } from '@ngrx/store';

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
