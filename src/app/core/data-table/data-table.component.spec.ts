import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { StoreModule } from '@ngrx/store';

import { CommunicateService } from '@app/services/communicate.service';
import { RequestsService } from '@app/services/requests.service';
import { PermissionsService } from '@app/services/permissions.service';
import { MocksService } from '@app/services/mocks.service';
import { ActionsService } from '@app/services/actions.service';


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
