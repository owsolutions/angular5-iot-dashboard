import { Action } from '@shared/core/definitions';
import UpdateOrPrepend from '@shared/core/functions/UpdateOrPrepend';

export function activitiesReducer (state = [], action: Action) {
  switch (action.type) {
    case 'UPDATE_ACTIVITY':
      return UpdateOrPrepend(action.payload , state, 'id');
  }
  return state;
}
