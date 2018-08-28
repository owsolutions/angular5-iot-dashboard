import { StoreModule } from '@ngrx/store';
import { devicesReducer } from './reducers/devices.reducer';
import { locationsReducer } from './reducers/locations.reducer';
import { unconnectedReducer } from './reducers/unconnectedSources.reducer';

export function iotModuleReducersGenerator () {
  return StoreModule.forFeature('iotModule', {
    devices: devicesReducer,
    locations: locationsReducer,
    unconnectedSources: unconnectedReducer,
  });
}
