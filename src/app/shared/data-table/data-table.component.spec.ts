import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationRequestService } from '../../pagination.service';
import { DataTableComponent } from './data-table.component';
import { CommunicateService } from '../../communicate.service';
import { StoreModule } from '@ngrx/store';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableComponent ],
      providers: [
        PaginationRequestService,
        CommunicateService
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
