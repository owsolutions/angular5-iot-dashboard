import { devicesReducer } from '@components/data-layer/devices.reducer';
import { locationsReducer } from '@components/data-layer/locations.reducer';
import { activitiesReducer } from '@components/data-layer/activity.reducer';
import { rolesReducer } from '@components/data-layer/roles.reducer';
import { unconnectedReducer } from '@components/data-layer//unconnectedSources.reducer';

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
