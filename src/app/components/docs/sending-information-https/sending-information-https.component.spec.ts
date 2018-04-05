import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingInformationHttpsComponent } from './sending-information-https.component';

describe('SendingInformationHttpsComponent', () => {
  let component: SendingInformationHttpsComponent;
  let fixture: ComponentFixture<SendingInformationHttpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingInformationHttpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingInformationHttpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
