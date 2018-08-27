import { Route } from '@angular/router';
import { AuthGuard } from '@services/user.service';
import { UsersArchiveComponent } from '@app/users/users-archive/users-archive.component';
import { UsersSingleComponent } from '@app/users/users-single/users-single.component';
import { RoleSingleComponent } from '@app/users/role-single/role-single.component';
import { RoleArchiveComponent } from '@app/users/role-archive/role-archive.component';

export function AuthLayoutChild(component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    component: component,
    ... options,
    canActivate: [AuthGuard],
  };
}

export const userAuthLayoutRoutes = [
  AuthLayoutChild (UsersArchiveComponent, 'users'),
  AuthLayoutChild (UsersSingleComponent, 'user/:id'),
  AuthLayoutChild (RoleSingleComponent, 'role/create'),
  AuthLayoutChild (RoleSingleComponent, 'role/:id'),
  AuthLayoutChild (RoleArchiveComponent, 'roles'),
];
