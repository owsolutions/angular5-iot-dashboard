import { devicesReducer } from '@app/data-layer/devices.reducer';
import { locationsReducer } from '@app/data-layer/locations.reducer';
import { activitiesReducer } from '@app/data-layer/activity.reducer';
import { notificationsReducer } from '@app/data-layer/notifications.reducer';
import { unconnectedReducer } from '@app/data-layer/unconnectedSources.reducer';

import { StoreModule } from '@ngrx/store';

export function appReducersGenerator () {
  return StoreModule.forRoot({
    devices: devicesReducer,
    locations: locationsReducer,
    activities: activitiesReducer,
    unconnectedSources: unconnectedReducer,
    notifications: notificationsReducer,
  });
}
