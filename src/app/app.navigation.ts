import { environment } from 'environments/environment';
import { DefaultUsersModuleNavigation } from '@app/users/users.module';
import { NgxMenuItem } from '@app/ng5-basic/ngx-sidebar/ngx-sidebar.module';
import { DefaultIotModuleNavigation } from '@app/iot/iot.module';
import { DefaultBoilerPlateModuleNavigation } from '@app/boilerplate/boilerplate.module';

export const navigation: NgxMenuItem[] = [
  ...DefaultBoilerPlateModuleNavigation,
  DefaultUsersModuleNavigation,
  ...DefaultIotModuleNavigation,
  ! environment.production ? {
    link: '/gallery',
    icon: 'icon-attach_file',
    title: 'Gallery',
    permissions: ['USERS::VIEW'],
    auth: true,
    class: 'gallery',
    focused: true,
  } : null,
];
