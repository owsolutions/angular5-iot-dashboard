import { devicesReducer } from './devices.reducer';
import { locationsReducer } from './locations.reducer';
import { activitiesReducer } from './activity.reducer';
import { widgetsReducer } from './widgets.reducer';
import { rolesReducer } from './roles.reducer';

import { StoreModule } from '@ngrx/store';

export function appReducersGenerator () {
    return StoreModule.provideStore({
        devices: devicesReducer,
        locations: locationsReducer,
        activities: activitiesReducer,
        widgets: widgetsReducer,
        roles: rolesReducer
    });
}
