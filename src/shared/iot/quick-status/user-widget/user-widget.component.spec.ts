import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@shared/core/services/user.service';
import { UserWidgetComponent } from './user-widget.component';
import { CommunicateService } from '@shared/core/services/communicate.service';
import { StoreModule } from '@ngrx/store';

import { RequestsService } from '@shared/core/services/requests.service';
import { MocksService } from '@shared/core/services/mocks.service';
import { PermissionsService } from '@shared/core/services/permissions.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

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
        StoreModule.forRoot({}),
        RouterTestingModule,
        RouterModule
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
