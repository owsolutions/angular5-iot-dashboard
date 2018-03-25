import { Action } from '@app/definitions';
import UpdateOrInsert from '@components/functions/UpdateOrInsert';

export function rolesReducer (state = [], action: Action) {
  switch (action.type) {
    case 'UPDATE_ROLE':
      return UpdateOrInsert(action.payload , state, 'id');
    case 'INSERT_ROLE':
      return state.concat(action.payload);
  }
  return state;
}
