import { devicesReducer } from '@app/data-layer/devices.reducer';
import { locationsReducer } from '@app/data-layer/locations.reducer';
import { activitiesReducer } from '@app/data-layer/activity.reducer';
import { rolesReducer } from '@app/data-layer/roles.reducer';
import { unconnectedReducer } from '@app/data-layer/unconnectedSources.reducer';

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
