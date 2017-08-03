import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [
        RouterModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
