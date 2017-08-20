import { devicesReducer } from '@app/core/data-layer/devices.reducer';
import { locationsReducer } from '@app/core/data-layer/locations.reducer';
import { activitiesReducer } from '@app/core/data-layer/activity.reducer';
import { widgetsReducer } from '@app/core/data-layer/widgets.reducer';
import { rolesReducer } from '@app/core/data-layer/roles.reducer';

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
