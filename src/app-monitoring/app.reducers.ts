import { devicesReducer } from '@shared/iot/data-layer/devices.reducer';
import { locationsReducer } from '@shared/iot/data-layer/locations.reducer';
import { activitiesReducer } from '@shared/iot/data-layer/activity.reducer';
import { widgetsReducer } from '@shared/iot/data-layer/widgets.reducer';
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
