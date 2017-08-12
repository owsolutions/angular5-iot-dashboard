import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestsService } from '@app/core/services/requests.service';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';
import { SignupComponent } from './signup.component';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      providers: [
        RequestsService,
        MocksService,
        PermissionsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
