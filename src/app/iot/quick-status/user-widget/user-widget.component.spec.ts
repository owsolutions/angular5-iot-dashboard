import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@app/services/user.service';
import { UserWidgetComponent } from './user-widget.component';
import { CommunicateService } from '@app/services/communicate.service';
import { StoreModule } from '@ngrx/store';

import { RequestsService } from '@app/services/requests.service';
import { MocksService } from '@app/services/mocks.service';
import { PermissionsService } from '@app/services/permissions.service';

describe('UserWidgetComponent', () => {
  let component: UserWidgetComponent;
  let fixture: ComponentFixture<UserWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWidgetComponent ],
      providers: [
        UserService,
        CommunicateService,
        RequestsService,
        MocksService,
        PermissionsService
      ],
      imports: [
        StoreModule.provideStore({}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
