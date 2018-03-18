import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { StoreModule } from '@ngrx/store';

import { CommunicateService } from '@shared/core/services/communicate.service';
import { RequestsService } from '@shared/core/services/requests.service';
import { PermissionsService } from '@shared/core/services/permissions.service';
import { MocksService } from '@shared/core/services/mocks.service';
import { ActionsService } from '@shared/core/services/actions.service';


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
        StoreModule.forRoot({})
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
