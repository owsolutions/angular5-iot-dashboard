import { Action } from '@shared/core/definitions';
import UpdateOrInsert from '@shared/core/functions/UpdateOrInsert';
import { CloudDevice, DataSource } from '@app/shared/core/definitions';

export const UPDATE_DEVICE = 'UPDATE_DEVICE';
export function devicesReducer (state: Array<CloudDevice> = [], action: Action) {
  switch (action.type) {
    case 'UPDATE_DEVICE':
      return UpdateOrInsert(action.payload , state, 'id', true);
    case 'DELETE_DEVICE':
      return state.filter(x => x.id !== action.payload);
    case 'INSERT_DEVICE':
      return state.concat(action.payload);
    case 'DEVICE_GET_DATA_SOURCE':
      const payload: DataSource = action.payload;
      const deviceWithThisSource = state.find(x => x.datasource === payload.dataSourceId);
      if (deviceWithThisSource) {
        return state.map(x => {
          if (x.id === deviceWithThisSource.id) {
            x.value = payload.value;
          }
          return x;
        });
      }
      return state;
  }
  return state;
}
