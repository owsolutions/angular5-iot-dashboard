import { devicesReducer } from '@shared/core/data-layer/devices.reducer';
import { locationsReducer } from '@shared/core/data-layer/locations.reducer';
import { activitiesReducer } from '@shared/core/data-layer/activity.reducer';
import { rolesReducer } from '@shared/core/data-layer/roles.reducer';
import { unconnectedReducer } from '@shared/core/data-layer//unconnectedSources.reducer';

import { StoreModule } from '@ngrx/store';

export function appReducersGenerator () {
  return StoreModule.forRoot({
    devices: devicesReducer,
    locations: locationsReducer,
    activities: activitiesReducer,
    roles: rolesReducer,
    unconnectedSources: unconnectedReducer

  });
}
