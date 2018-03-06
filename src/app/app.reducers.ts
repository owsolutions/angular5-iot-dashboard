import { devicesReducer } from '@app/iot/data-layer/devices.reducer';
import { locationsReducer } from '@app/iot/data-layer/locations.reducer';
import { activitiesReducer } from '@app/iot/data-layer/activity.reducer';
import { widgetsReducer } from '@app/iot/data-layer/widgets.reducer';
import { rolesReducer } from '@app/core/data-layer/roles.reducer';

import { StoreModule } from '@ngrx/store';

export function appReducersGenerator () {
    return StoreModule.forRoot({
        devices: devicesReducer,
        locations: locationsReducer,
        activities: activitiesReducer,
        widgets: widgetsReducer,
        roles: rolesReducer
    });
}
