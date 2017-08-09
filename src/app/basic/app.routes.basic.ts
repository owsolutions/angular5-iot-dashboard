import { Route, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@app/basic/index/index.component';
export const appRoutes: Routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: IndexComponent
    }
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
