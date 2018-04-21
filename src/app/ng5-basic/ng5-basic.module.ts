import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgMediaModule } from 'ng-media';
import { RealtimeService } from '@services/realtime.service';
import { NotificationService } from '@services/notification.service';
import { PermissionsService } from '@services/permissions.service';
import { RequestsService } from '@services/requests.service';
import { ActionsService } from '@services/actions.service';
import { UserService, AuthGuard } from '@services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockService } from '@services/mocks.service';
import { TokenInterceptor } from '@services/token.interceptor';
import { RealtimeDocumentModule } from 'realtime-document';
import { ToasterModule } from 'angular2-toaster';
import { NgxUserModule } from './authentication/authentication.module';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgxSidebarModule } from './ngx-sidebar/ngx-sidebar.module';
import { SidebarControllerService } from './ngx-sidebar/sidebar-controller.service';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { FooterComponent } from '@app/components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SideBarComponent,
    NavBarComponent,
    ProfileMenuComponent,
    FooterComponent
  ],
  imports: [
    RealtimeDocumentModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgxUserModule,
    NgxSidebarModule,
    NgMediaModule,
    RouterModule.forRoot([]),
    ToasterModule.forRoot(),
  ],
  providers: [
    SidebarControllerService,
    RealtimeService,
    PermissionsService,
    RequestsService,
    RealtimeService,
    MockService,
    ActionsService,
    NotificationService,
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
})
export class Ng5BasicModule {

  constructor (
    private realtime: RealtimeService,
  ) {
    // Realtime service is imported intentionally
  }
}
