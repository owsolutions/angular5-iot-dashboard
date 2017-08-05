import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { CommunicateService } from '../../communicate.service';
import { RequestsService } from '../../requests.service';
import { PermissionsService } from '../../permissions.service';
import { StoreModule } from '@ngrx/store';
import { MocksService } from '../../mocks.service';
import { ActionsService } from '../../actions.service';


describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableComponent ],
      providers: [
        CommunicateService,
        PermissionsService,
        RequestsService,
        ActionsService,
        MocksService
      ],
      imports: [
        StoreModule.provideStore({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
