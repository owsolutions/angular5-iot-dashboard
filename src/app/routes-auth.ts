import { Route } from '@angular/router';
import { AuthGuard } from './user.service';


export function appendAuthGuard (route: Route) {
    route.canActivate = [AuthGuard];
    return route;
}
