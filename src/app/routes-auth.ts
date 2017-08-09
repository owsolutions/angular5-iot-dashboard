import { Route } from '@angular/router';
import { AuthGuard } from '@app/services/user.service';


export function appendAuthGuard (route: Route) {
    route.canActivate = [AuthGuard];
    return route;
}
