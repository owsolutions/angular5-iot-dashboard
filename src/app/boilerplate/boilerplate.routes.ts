import { Route } from '@angular/router';
import { AuthGuard } from '@services/user.service';
import { SampleIndexComponent } from '@app/boilerplate/sample-index/sample-index.component';

export function AuthLayoutChild(component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    component: component,
    ... options,
    canActivate: [AuthGuard],
  };
}

export const boilerplateRoutes = [
  AuthLayoutChild (SampleIndexComponent, 'index'),
];
