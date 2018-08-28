import { Route } from '@angular/router';
import { AuthGuard } from '@services/user.service';

export function AuthLayoutChild(component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    component: component,
    ... options,
    canActivate: [AuthGuard],
  };
}

export const userAuthLayoutRoutes = [
  
];
