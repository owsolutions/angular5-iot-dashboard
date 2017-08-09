import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../../user.service';
import { UserWidgetComponent } from './user-widget.component';
import { CommunicateService } from '../../../communicate.service';
import { StoreModule } from '@ngrx/store';

import { RequestsService } from '../../../requests.service';
import { MocksService } from '../../../mocks.service';
import { PermissionsService } from '../../../permissions.service';

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
