import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MockComponent } from 'ng2-mock-component';
import { appReducersGenerator } from '@app/core/app.reducers';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestsService } from '@app/services/requests.service';
import { PermissionsService } from '@app/services/permissions.service';
import { MocksService } from '@app/services/mocks.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent({selector: 'app-navigation' }),
        MockComponent({selector: 'app-quick-status' }),
        MockComponent({selector: 'app-app-info' })
      ],
      imports: [
        appReducersGenerator(),
        RouterTestingModule
      ],
      providers: [
        RequestsService,
        PermissionsService,
        MocksService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
