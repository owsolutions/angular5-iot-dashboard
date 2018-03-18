import { devicesReducer } from '@shared/iot/data-layer/devices.reducer';
import { locationsReducer } from '@shared/iot/data-layer/locations.reducer';
import { activitiesReducer } from '@shared/iot/data-layer/activity.reducer';
import { rolesReducer } from '@shared/core/data-layer/roles.reducer';

import { StoreModule } from '@ngrx/store';

export function appReducersGenerator () {
  return StoreModule.forRoot({
    devices: devicesReducer,
    locations: locationsReducer,
    activities: activitiesReducer,
    roles: rolesReducer,
  });
}
