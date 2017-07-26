import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LocationEditComponent } from './location-edit.component';
import { CommunicateService } from '../../communicate.service';
import { appReducersGenerator } from '../../app.reducers';
import { ActivatedRoute, Data } from '@angular/router';

describe('LocationEditComponent', () => {
  let component: LocationEditComponent;
  let fixture: ComponentFixture<LocationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationEditComponent ],
      providers: [
        CommunicateService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                mode: 'edit'
              })
            },
            params: {
              subscribe: (fn: (value: Data) => void) => fn({
                id: 1
              })
            }
          }
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      imports: [
        RouterTestingModule,
        appReducersGenerator()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(component).toBeTruthy();
  }));
});
