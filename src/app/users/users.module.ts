import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersArchiveComponent } from './users-archive/users-archive.component';
import { NgUikitModule } from '@app/ng-uikit/ng-uikit.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgxTooltipModule } from '../components/ngx-tooltip/ngx-tooltip.module';
import { UsersSingleComponent } from './users-single/users-single.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserCommonService } from '@app/users/user-common.service';
import { UserMockService } from '@app/users/user-mocks.service';
import { UserRequestsService } from '@app/users/user-requests.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserMockInterceptor } from '@app/users/user-mock.interceptor';
import { environment } from 'environments/environment';
import { RoleArchiveComponent } from '@app/users/role-archive/role-archive.component';
import { RoleSingleComponent } from '@app/users/role-single/role-single.component';

@NgModule({
  imports: [
    CommonModule,
    NgUikitModule,
    RouterModule.forChild([]),
    TranslateModule.forRoot(),
    NgxTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    NgbModalModule.forRoot()
  ],
  providers: [
    UserCommonService,
    UserMockService,
    UserRequestsService,
    !environment.targetAPI ? { provide: HTTP_INTERCEPTORS, useClass: UserMockInterceptor, multi: true } : [],
  ],
  declarations: [UsersArchiveComponent, UsersSingleComponent, RoleArchiveComponent, RoleSingleComponent]
})
export class UsersModule { }

export const DefaultUsersModuleNavigation = {
  icon: 'icon-verified_user',
  title: 'Users & Access',
  class: 'users-access',
  children: [
    {
      link: '/roles',
      icon: 'fa-user-circle',
      title: 'Roles list',
      permissions: ['LOCATIONS::VIEW'],
      auth: true,
      class: 'roles-list'
    },
    {
      link: '/users',
      icon: 'fa-users',
      title: 'View users',
      class: 'users-list'
    },
    {
      link: '/user/create',
      icon: 'fa-plus',
      title: 'Create a user',
      class: 'users-create'
    },
  ]
};
