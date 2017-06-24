import { devicesReducer } from './devices/devices.reducer';
import { locationsReducer } from './locations/locations.reducer';
import { activitiesReducer } from './activity/activity.reducer';
import { StoreModule } from '@ngrx/store';

export function appReducersGenerator () {
    return StoreModule.provideStore({
        devices: devicesReducer,
        locations: locationsReducer,
        activities: activitiesReducer
    });
}
