import { Action } from '@app/definitions';
import UpdateOrInsert from '@components/functions/UpdateOrInsert';

export function locationsReducer (state = [], action: Action) {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return UpdateOrInsert(action.payload , state, 'id');
  }
  return state;
}
