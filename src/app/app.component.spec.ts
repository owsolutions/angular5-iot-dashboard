import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MockComponent } from 'ng2-mock-component';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent({selector: 'app-navigation' }),
        MockComponent({selector: 'app-content-box' }),
        MockComponent({selector: 'app-quick-status' }),
        MockComponent({selector: 'app-app-info' })
      ],
      imports: [StoreModule.provideStore({})]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a app-container class`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-container')).toBeTruthy();
  }));

  it(`should have a app-navigation element`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-navigation')).toBeTruthy();
  }));

  it(`should have a app-content-box element`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-content-box')).toBeTruthy();
  }));

  it(`should have a app-quick-status element`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-quick-status')).toBeTruthy();
  }));

  it(`should have a app-app-info element`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-app-info')).toBeTruthy();
  }));

});
