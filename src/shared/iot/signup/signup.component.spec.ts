import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestsService } from '@app/core/services/requests.service';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SignupComponent } from './signup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ SignupComponent ],
      providers: [
        RequestsService,
        MocksService,
        PermissionsService
      ],
      imports: [
        RouterTestingModule,
        RouterModule
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
