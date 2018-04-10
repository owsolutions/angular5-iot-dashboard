import { Action, ILocation } from '@app/definitions';
import UpdateOrInsert from '@components/functions/UpdateOrInsert';

export function locationsReducer (state: Array<ILocation> = [], action: Action) {
  switch (action.type) {
    case 'RESET':
      return [];
    case 'UPDATE_LOCATION':
      return UpdateOrInsert(action.payload , state, 'id');
    case 'DELETE_LOCATION':
      return state.filter(x => +x.id !== +action.payload);
  }
  return state;
}
