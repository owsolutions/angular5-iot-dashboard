import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HelperBoxComponent } from './helper-box.component';
import { OutputPinComponent } from '../output-pin/output-pin.component';
import { SelectInputComponent } from '../../forms/select-input/select-input.component';
import { TextInputComponent } from '../../forms/text-input/text-input.component';
import { appReducersGenerator } from '../../app.reducers';
import { CommunicateService } from '../../communicate.service';
import { RequestsService } from '../../requests.service';
import { PermissionsService } from '../../permissions.service';
import { MocksService } from '../../mocks.service';
import { ActionsService } from '../../actions.service';


describe('HelperBoxComponent', () => {
  let component: HelperBoxComponent;
  let fixture: ComponentFixture<HelperBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HelperBoxComponent,
        OutputPinComponent,
        SelectInputComponent,
        TextInputComponent
      ],
      imports: [
        appReducersGenerator()
      ],
      providers: [
        CommunicateService,
        RequestsService,
        PermissionsService,
        MocksService,
        ActionsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(component).toBeTruthy();
  }));
});
