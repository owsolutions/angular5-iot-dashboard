import { Action } from '@shared/core/definitions';
import UpdateOrInsert from '@shared/core/functions/UpdateOrInsert';

export const UPDATE_DEVICE = 'UPDATE_DEVICE';
export function devicesReducer (state = [], action: Action) {
  switch (action.type) {
    case 'UPDATE_DEVICE':
      return UpdateOrInsert(action.payload , state, 'id', true);
    case 'DELETE_DEVICE':
      return state.filter(x => x.id !== action.payload);
    case 'INSERT_DEVICE':
      return state.concat(action.payload);
  }
  return state;
}
