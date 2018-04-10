import { Action } from '@app/definitions';
import UpdateOrPrepend from '@components/functions/UpdateOrPrepend';

export function activitiesReducer (state = [], action: Action) {
  switch (action.type) {
    case 'RESET':
      return [];
    case 'UPDATE_ACTIVITY':
      return UpdateOrPrepend(action.payload , state, 'id');
  }
  return state;
}
